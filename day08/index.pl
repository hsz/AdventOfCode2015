use strict;

open my $f, 'input.txt';
chomp(my @input = <$f>);
my $n = (length join '', @input);

sub one {
    return $n - length join '', map {eval} @input;
}

sub two {
    return -$n + length join '', map { s/("|\\)/\\$1/g; "'$_'" } @input
}

1;