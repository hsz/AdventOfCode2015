<?php

$input = 'bgvyzdsv';

return [

    one => run(function ($i = 0) use ($input) {
        while (hexdec(substr(md5($input . ++$i), 0, 5)));
        return $i;
    }),

    two => run(function ($i = 0) use ($input) {
        while (hexdec(substr(md5($input . ++$i), 0, 6)));
        return $i;
    }),

];
