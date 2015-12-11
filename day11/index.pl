use strict;

open my $f, 'input.txt';
$_ = <$f>;

sub one {
    my $abc = join '|', map { pack 'C*', $_..$_+2 } 97..120;
    while (!++$_ || m/[iol]/ || ((()=/(.)\1/g) < 2) || !m/$abc/){};
    return $_;
}

sub two {
    return one();
}

1;