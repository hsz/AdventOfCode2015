<?php

$input = 'bgvyzdsv';
$zeros = function ($n, $i = 0) use ($input) {
    while (hexdec(substr(md5($input . ++$i), 0, $n)));
    return $i;
};

return [

    one => $zeros(5),
    two => $zeros(6),

];
