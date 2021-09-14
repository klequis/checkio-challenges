## Tests
abcd
abc
abcdf
a
''

## abcd

- [], a -> ['a']
- ['a'], b -> ['ab']
- ['ab'], c -> ['ab', 'c']
- ['ab', 'c'], d -> ['ab', 'cd']


## abc
- [], a -> ['a']
- ['a'], b -> ['ab']
- ['ab'], c -> ['ab', 'c']
* ['ab', 'c'] -> append(_) -> ['ab', 'c\_']

## abcdf
- [], a -> ['a']
- ['a'], b -> ['ab']
- ['ab'], c -> ['ab', 'c']
- ['ab', 'c'], d -> ['ab', 'cd']
- ['ab', 'cd'], f -> ['ab', 'cd', 'f']
* ['ab', 'cd', 'f'] -> append(_) -> ['ab', 'cd', 'f\_']

## a
- [], a -> ['a']
* ['a'] -> append(\_) -> ['a_']

## ''
- [], '' -> []
* done - no append
