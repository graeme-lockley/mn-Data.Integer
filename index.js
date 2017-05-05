//- The following interface represents all numbers that can be expressed without a fractional component.
//-
//-```haskell
//- interface Integer a: Number a, Ordered a, Enumerable a
//-     (/), mod :: a -> Maybe a
//-     divMod   :: a -> Maybe (a * a)
//-     divMod y =
//-         this.(/)(y).reduce(() => Nothing)(q => this.mod(y).reduce(() => Nothing)(t => (q, r))
//-  ```
//-
//- Note the following:
//-
//- * The division centered operations all return a Maybe to cater for the scenario where an attempt is used to divide
//-   by 0.
//- * The type `a * a` signifies a tuple.

const Maybe = mrequire("core:Data.Maybe:1.2.0");
const Tuple = mrequire("core:Data.Tuple:v1.0.0");


//- Default implementation for `divMod`.
//= Integer a => defaultDivMod :: a -> Maybe (a * a)
function defaultDivMod(y) {
    return this.$SLASH(y).reduce(
        () => Maybe.Nothing)(
        q => this.mod(y).reduce(
            () => Maybe.Nothing)(
            r => Maybe.Just(Tuple(q)(r))
        )
    );
}


module.exports = {
    defaultDivMod
};