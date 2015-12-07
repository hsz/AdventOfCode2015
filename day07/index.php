<?php

$input = array_reduce(file('input.txt'), function ($map, $v) {
    preg_match('/(?:([a-z]+|\d+)?([A-Z]+))?([a-z]+|\d+)->([a-z]+)/', str_replace(' ', '', $v), $m);
    $map[$m[4]] = (object)array_combine(['dest', 'b', 'op', 'a'], array_reverse(array_slice($m, 1)));

    return $map;
}, []);

$asmbl = function ($map) {
    while (count(array_filter($map, function ($v) {
        return is_object($v);
    }))) {
        foreach ($map as &$v) {
            if (is_object($v) && (!isset($map[$v->a]) || !is_object($map[$v->a])) && (!isset($map[$v->b]) || !is_object($map[$v->b]))) {
                $a = !isset($map[$v->a]) ? $v->a : $map[$v->a];
                $b = !isset($map[$v->b]) ? $v->b : $map[$v->b];
                $v = $v->op === 'AND' ? $a & $b : ($v->op === 'OR' ? $a | $b : ($v->op === 'LSHIFT' ? $a << $b : ($v->op === 'RSHIFT' ? $a >> $b : ($v->op === 'NOT' ? 65535 - $b : $b))));
            }
        }
    }

    return $map['a'];
};

return [

    one => run(function () use ($asmbl, $input) {
        return $asmbl($input);
    }),

    two => run(function () use ($asmbl, $input) {
        return $asmbl(['b' => $asmbl($input)] + $input);
    }),

];
