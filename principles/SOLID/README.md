## Applying SOLID principles to Javascript

SOLID is a set of rules that we should follow in order for
our code to be cleaner, easier to maintain, less bugs

SOLID is just set of rules, not necessary but should be considered
as best practices depends on different situations

1. S - Single responsibility: 1 module 1 job
2. O - Open closed: Module should be implemented dynamically, so we can expand but not have to edit it
3. L - Liskov: whatever work on the base will work on what extends from it (Square extends Rectangle)
4. I - Interface: Interfaces should be simple and works in all situations, client don't have to know what they don't need
5. D - Dependency: Higher modules should not depends on lower module, this helps during maintenance and fix bugs
