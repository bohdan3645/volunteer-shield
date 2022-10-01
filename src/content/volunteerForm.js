const volunteerForm = {
    ua: {
        title: 'Волонтер',
        first_name: `Ваше ім'я`,
        second_name: 'Ваше прізвище',
        sex: 'Ваша стать',
        availability: 'Скільки часу на день ви можете приділити волонтерській роботі',
        contribution: 'В якій сфері ви готові себе реалізувати в якості волонтера',
        time_of_work: { label: 'Зручний для вас час роботи', options: ['Вранці', 'Вдень', 'Ввечері', 'Змішаний графік'] },
        contact: `Як з вами зв'язатись`,
        button: 'Відправити'
    },
    eng: {
        title: 'Volunteer',
        first_name: `First name`,
        second_name: 'Second name',
        sex: 'Your Sex',
        availability: 'How mush time can you volunteer per day',
        contribution: 'How can you help us',
        time_of_work: { label: 'Convenient time for you to work', options: ['Morning', 'Midday', 'Evening', 'Mixed schedule'] },
        contact: 'How can we contact you',
        button: 'Submit'
    }
}

export default volunteerForm;