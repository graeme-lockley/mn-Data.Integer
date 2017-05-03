//- The following interface represents all numbers that can be expressed without a fractional component.
//-
//-```haskell
//- interface Integer a: Number a, Ordered a, Enumerable a
//-     quot, rem, (/), mod :: a -> Maybe a
//-     quotRem             :: a -> Maybe (a * a)
//-     quotRem y =
//-         this.quot(y).reduce(() => Nothing)(q => this.rem(y).reduce(() => Nothing)(t => (q, r))
//-     divMod              :: a -> Maybe (a * a)
//-     divMod y =
//-         this.(/)(y).reduce(() => Nothing)(q => this.mod(y).reduce(() => Nothing)(t => (q, r))
//-  ```
//-
//- Note the following:
//-
//- * The division centered operations all return a Maybe to cater for the scenario where an attempt is used to divide
//-   by 0.
//- * The type `a * a` signifies a tuple.


//- Default implementation for `quoteRem`.
//= Integer a => defaultQuoteRem :: a -> Maybe (a * a)
function defaultQuoteRem(y) {
    return this.quot(y).reduce(
        () => Nothing)(
        q => this.rem(y).reduce(
            () => Nothing)(
            r => [q, r]
        )
    );
}


//- Default implementation for `divMod`.
//= Integer a => defaultDivMod :: a -> Maybe (a * a)
function defaultDivMod(y) {
    return this.$SLASH(y).reduce(
        () => Nothing)(
        q => this.mod(y).reduce(
            () => Nothing)(
            r => [q, r]
        )
    );
}


module.exports = {
    defaultDivMod,
    defaultQuoteRem
};