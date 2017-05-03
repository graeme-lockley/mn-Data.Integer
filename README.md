
The following interface represents all numbers that can be expressed without a fractional component.

```haskell
interface Integer a: Number a, Ordered a, Enumerable a
    quot, rem, (/), mod :: a -> Maybe a
    quotRem             :: a -> Maybe (a * a)
    quotRem y =
        this.quot(y).reduce(() => Nothing)(q => this.rem(y).reduce(() => Nothing)(t => (q, r))
    divMod              :: a -> Maybe (a * a)
    divMod y =
        this.(/)(y).reduce(() => Nothing)(q => this.mod(y).reduce(() => Nothing)(t => (q, r))
```

Note the following:

* The division centered operations all return a Maybe to cater for the scenario where an attempt is used to divide
by 0.
* The type `a * a` signifies a tuple.

### defaultQuoteRem

```haskell
Integer a => defaultQuoteRem :: a -> Maybe (a * a)
```

Default implementation for `quoteRem`.

### defaultDivMod

```haskell
Integer a => defaultDivMod :: a -> Maybe (a * a)
```

Default implementation for `divMod`.

