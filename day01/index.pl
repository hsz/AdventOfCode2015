use strict;

open my $f, 'input.txt';
$_ = <$f>;

sub one {
    return tr/\(//-tr/\)//;
}

sub two {
    my $i, my $c;
    for (split //) {
        return $i if $c += $_ eq '(' || -1, $i++, $c == -1;
    }
}

1;