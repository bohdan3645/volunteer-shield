const driverForm = {
    ua: {
        title: 'Водій',
        location: 'Місце знаходження',
        name: `Ваше ім'я`,
        phone_number: 'Номер телефону',
        car: { label: 'Автомобіль', options: ['Легковий автомобіль', 'Вантажний автомобіль', 'Напівпричіп', 'Причіп', 'Автобус', 'Мікроавтобус', 'Не маю транспорт, але є права та досвід'] },
        car_load_capacity: 'Вантажопідйомність автомобіля',
        driver_license: { label: 'Категорія водійських прав', options: ['A', 'B', 'C', 'D', 'T'] },
        driving_experience: { label: 'Стаж водіння', options: ['До 2 років', 'Від 2 до 5 років', 'Від 5 років'] },
        button: 'Відправити'
    },
    eng: {
        title: 'Driver',
        location: 'Your location',
        name: `Your name`,
        phone_number: 'Phone number',
        car: { label: 'car', options: ['Car', 'Truck', 'Semi-trailer', 'trailer', 'But', 'Minibus', `I don't have transport, but I have driver's license and driving experience` ] },
        car_load_capacity: 'Load capacity of the car',
        driver_license: { label: `Driver's license category`, options: ['A', 'B', 'C', 'D', 'T'] },
        driving_experience: { label: 'Driving experience', options: ['Less than 2 years', 'from 2 to 5 years', 'More than 5 years'] },
        button: 'Submit'
    }
}

export default driverForm;