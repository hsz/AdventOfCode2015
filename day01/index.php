<?php

$input = file('input.txt')[0];

return [

    one => run(function () use ($input) {
        $c = count_chars($input);

        return $c[40] - $c[41];
    }),

    two => run(function () use ($input) {
        $k = $floor = 0;
        foreach (str_split($input) as $k => $v) {
            if (-1 === ($v === '(' ? ++$floor : $floor--)) {
                break;
            }
        }

        return ++$k;
    }),

];
