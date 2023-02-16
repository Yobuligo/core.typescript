class Person {
  parent?: Person = undefined;
  firstname: string = "Stacey";
}

function getPerson(): Person | undefined {
  return undefined;
}

// // const person: Person | undefined = new Person();

// checkNotNull(getPerson())?.firstname
