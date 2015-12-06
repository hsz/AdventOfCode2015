<?php

$input = file('input.txt');

return [

    one => array_reduce($input, function ($sum, $v) {
        return $sum + (preg_match('/(.)\1/', $v) && preg_match('/([aeiou].*){3}/', $v) && !preg_match('/ab|cd|pq|xy/', $v));
    }, 0),

    two => array_reduce($input, function ($sum, $v) {
        return $sum + (preg_match('/(..).*\1/', $v) && preg_match('/(.).\1/', $v));
    }, 0),

];
