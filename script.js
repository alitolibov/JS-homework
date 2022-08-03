let arr = [
    {
        name: 'iskandar',
        age: 9,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'zafar',
        age: 14,
        course: {
            title: 'smm'
        }
    },
    {
        name: 'temur',
        age: 1,
        course: {
            title: 'graph'
        }
    },
    {
        name: 'sardor',
        age: 24,
        course: {
            title: 'smm'
        }
    },
    {
        name: 'timur',
        age: 19,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'aziz',
        age: 28,
        course: {
            title: 'graph'
        }
    },
    {
        name: 'ali',
        age: 26,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'mir',
        age: 17,
        course: {
            title: 'graph'
        }
    },
    {
        name: 'jonibek',
        age: 25,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'shox',
        age: 22,
        course: {
            title: 'smm'
        }
    },
    {
        name: 'shax',
        age: 68,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'mustafa',
        age: 78,
        course: {
            title: 'dev'
        }
    }
]

let courses = {
    smm: {
        count: 0,
        arr_names: []
    },
    dev: {
        count: 0,
        arr_names: []
    },
    graph: {
        count: 0,
        arr_names: []
    },
}


arr.filter(item => {
    if(item.course.title === 'smm') {
        courses.smm.arr_names.push(item) && courses.smm.count++
    } else if((item.course.title === 'dev')) {
        courses.dev.arr_names.push(item) && courses.dev.count++
    } else if((item.course.title === 'graph')) {
        courses.graph.arr_names.push(item) && courses.graph.count++ 
    }
})
console.log(courses);