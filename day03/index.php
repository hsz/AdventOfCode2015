<?php

$input = str_split(file('input.txt')[0]);

return [

    one => array_reduce($input, function ($sum, $v) use (&$x, &$y, &$a) {
        !$a && (($x = $y = 0) || ($a = ['0~0' => true]));
        $v === '>' ? ++$x : ($v === '<' ? --$x : ($v === '^' ? ++$y : --$y));
        return $sum + (!isset($a["$x~$y"]) && $a["$x~$y"] = true);
    }, 1),

    two => array_reduce($input, function ($sum, $v) {
        return null;
    }, 0),

];
