Object.prototype.getKeyByValue = function getKeyByValue(value, objs) {
  // защита от циклических ссылок
  if (!objs) {
    objs = []
  }

  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      if (this[prop] === value) {
        return prop
      } else if (
        typeof this[prop] === 'object' &&
        objs.indexOf(this[prop]) == -1
      ) {
        objs.push(this[prop])
        var res = this[prop].getKeyByValue(value, objs)
        if (res) {
          return prop + '.' + res
        } // за дополнительные баллы оценки - выведем цепочку названий ключей
      }
    }
  }
}

var foobar = {
  root: {
    label: 'Root',
    children: [
      {
        parent1: {
          label: 'Parent 1',
          children: [
            {
              'parent1.1': {
                label: 'Leaf 1 of Parent 1',
                children: [],
              },
            },
            {
              'parent1.2': {
                label: 'Leaf 2 of Parent 1',
                children: [],
              },
            },
          ],
        },
      },
      {
        parent2: {
          label: 'Parent 2',
          children: [
            {
              'parent2.1': {
                label: 'Leaf 1 of Parent 2',
                children: [],
              },
            },
            {
              'parent2.2': {
                label: 'Leaf 2 of Parent 2',
                children: [],
              },
            },
          ],
        },
      },
    ],
  },
}

console.log(getKeyByValue('Parent 1', foobar))
