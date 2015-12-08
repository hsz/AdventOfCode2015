use strict;
use List::Util qw(reduce);

open my $f, 'input.txt';
my @input = map { s/\n//; [ sort { $a <=> $b } split /x/] } <$f>;

sub one {
    return reduce { $a + 3 * @$b[0] * @$b[1] + 2 * @$b[0] * @$b[2] + 2 * @$b[1] * @$b[2] } 0, @input;
}

sub two {
    return reduce { $a + 2 * @$b[0] + 2 * @$b[1] + @$b[0] * @$b[1] * @$b[2] } 0, @input;
}

1;