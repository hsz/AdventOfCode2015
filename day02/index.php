<?php

$input = array_map(function ($v) {
    $r = array_map('intval', explode('x', $v));
    sort($r);

    return $r;
}, file('input.txt'));

return [

    one => array_reduce($input, function ($sum, $v) {
        return $sum + 3 * $v[0] * $v[1] + 2 * $v[0] * $v[2] + 2 * $v[1] * $v[2];
    }, 0),

    two => array_reduce($input, function ($sum, $v) {
        return $sum + 2 * $v[0] + 2 * $v[1] + array_product($v);
    }, 0),

];
