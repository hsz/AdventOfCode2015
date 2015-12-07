<?php
ini_set('memory_limit', '1G');

$input = array_map(function ($v) {
    preg_match_all('/\d+/', $v, $m);
    return array_merge([strpos($v, 'turn on') === 0 ? true : (strpos($v, 'turn off') === 0 ? false : null)], $m[0]);
}, file('input.txt'));

$light = function ($cb, $grid = []) use ($input) {
    array_walk($input, function ($v) use ($cb, &$grid) {
        for ($x = $v[1]; $x <= $v[3]; $x++) {
            for ($k = 0, $y = $v[2]; $y <= $v[4]; $y++) {
                ($grid[$k = $x * 1000 + $y] = $cb($v[0], isset($grid[$k]) ? $grid[$k] : 0)) < 0 && $grid[$k] = 0;
            }
        }
    });
    return array_sum($grid);
};

return [

    one => $light(function($v, $c) {
        return $v === null ? !$c : $v;
    }),

    two => $light(function($v, $c) {
        return $c + ($v === null ? 2 : ($v ? 1 : -1));
    }),

];
