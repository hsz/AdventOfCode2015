<?php

$input = str_split(file('input.txt')[0]);

return [

    one => array_reduce($input, function ($sum, $v) use (&$x, &$y, &$a) {
        !$a && (($x = $y = 0) || ($a = ['0~0' => true]));
        $v === '>' ? ++$x : ($v === '<' ? --$x : ($v === '^' ? ++$y : --$y));
        return $sum + (!isset($a["$x~$y"]) && $a["$x~$y"] = true);
    }, 1),

    two => ($a = 0) + array_reduce($input, function ($sum, $v) use (&$x, &$y, &$a, &$r) {
        !$a ? (($x = $y = [($r = 0), 0]) && ($a = ['0~0' => true])) : $r = !$r;
        $v === '>' ? ++$x[$r] : ($v === '<' ? --$x[$r] : ($v === '^' ? ++$y[$r] : --$y[$r]));
        return $sum + (!isset($a["$x[$r]~$y[$r]"]) && $a["$x[$r]~$y[$r]"] = true);
    }, 1),

];
