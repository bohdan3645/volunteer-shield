const ua = {
    heading: {
        title: 'Волонтерський Щит',
        subtitle: `Наша організація надає гуманітарну допомогу мешканцям, медичним закладам, 
            військовослужбовцям та бійцям територіальної оборони всіх міст в яких на даний момент відбуваються бойові дії.`,
        button: 'Хочу допомогти'
    },
    our_assistance: {
        title: 'Товари, які приймаємо в якості гуманітарної допомоги:',
        list: [
            'Їжа та напої',
            'Медикаменти',
            'Засоби гігієни',
            'Тактичне спорядження',
            'Транспорт',
            'Тощо'
        ]
    },
    volunteer_forms: {
        title: 'Для тих хто готовий допомогти:',
        forms: [
            {
                title: 'Організації',
                button: 'Заповнити форму'
            },
            {
                title: 'Волонтери',
                button: 'Заповнити форму'
            },
            {
                title: 'Водії та авто',
                button: 'Заповнити форму'
            },
        ]
    },
    financial_help: {
        title: 'Для всіх бажаючих допомогти фінансово добавляєм реквізити:',
        copy_button: { copy: 'Копіювати', copied: 'Скопійовано!' },
        bank_card_num: {
            title: 'Номер карти для пожертв',
            card_num: '5375 4141 1955 5745'
        },
        paypal: {
            title: 'PayPal',
            button_title: 'Підтримати',
        },
        bank_account_details: [
            {
                title: 'Мультивалютний рахунок в UAH, EUR, USD',
                details: [
                    {
                        field_name: 'Одержувач',
                        particular: 'Громадська Організація «Волонтерський Щит»',
                    },
                    {
                        field_name: 'Код ЄДРПОУ',
                        particular: '44739333',
                    },
                    {
                        field_name: 'Код банку МФО',
                        particular: '322313',
                    },
                    {
                        field_name: 'Банк',
                        particular: 'AT «Укрексімбанк»',
                    },
                    {
                        field_name: 'Реєстраційні рахунки',
                        particular: 'UA853223130000026005000050900',
                    },
                    {
                        field_name: 'Призначення платежу',
                        particular: 'Благодійна допомога',
                    },
                ],
            },
            {
                title: 'For receiving SWIFT in dollars (USD)',
                details: [
                    {
                        field_name: 'BENEFICIARY',
                        particular: 'NON-GOVERNMENTAL ORGANIZATION “VOLONTEER SHIELD”',
                    },
                    {
                        field_name: 'IBAN',
                        particular: 'UA853223130000026005000050900',
                    },
                    {
                        field_name: 'Beneficiary bank',
                        particular: 'JSC UKREXIMBANK, Ukraine, 03150 Kyiv, 127 Antonovich Str.',
                    },
                    {
                        field_name: 'SWIFT CODE',
                        particular: 'EXBS UA UX',
                    },
                    {
                        field_name: 'CHIPS UID',
                        particular: '316282',
                    },
                    {
                        field_name: 'Intermediary bank',
                        particular: 'Citibank N.A., New York, USA',
                    },
                    {
                        field_name: 'SWIFT CODE',
                        particular: 'CITI US 33',
                    }
                ],

            },
            {
                title: 'For receiving SWIFT in euros (EUR)',
                details: [
                    {
                        field_name: 'BENEFICIARY',
                        particular: 'NON-GOVERNMENTAL ORGANIZATION “VOLONTEER SHIELD”',
                    },
                    {
                        field_name: 'IBAN',
                        particular: 'UA853223130000026005000050900',
                    },
                    {
                        field_name: 'Beneficiary bank',
                        particular: 'JSC UKREXIMBANK, Ukraine, 03150 Kyiv, 127 Antonovich Str.',
                    },
                    {
                        field_name: 'SWIFT CODE',
                        particular: 'EXBS UA UX',
                    },
                    {
                        field_name: 'Intermediary bank',
                        particular: 'UniCredit Bank AG, Munich, Germany',
                    },
                    {
                        field_name: 'SWIFT CODE',
                        particular: 'HYVE DE MM',
                    }
                ],

            },
            {
                title: 'For receiving SWIFT in British pounds (GBP)',
                details: [
                    {
                        field_name: 'BENEFICIARY',
                        particular: 'NON-GOVERNMENTAL ORGANIZATION “VOLONTEER SHIELD”',
                    },
                    {
                        field_name: 'IBAN',
                        particular: 'UA853223130000026005000050900',
                    },
                    {
                        field_name: 'Beneficiary bank',
                        particular: 'JSC UKREXIMBANK, Ukraine, 03150 Kyiv, 127 Antonovich Str.',
                    },
                    {
                        field_name: 'SWIFT CODE',
                        particular: 'EXBS UA UX',
                    },
                    {
                        field_name: 'Intermediary bank',
                        particular: 'Citibank N.A. London Branch, London, United Kingdom SWIFT',
                    },
                    {
                        field_name: 'CODE',
                        particular: 'CITI GB 2L',
                    },
                ],
            },
        ],
        crypto: [
            {
                currency: 'Bitcoin',
                address: 'bc1qk7qhqrvpjzg2mp2vty06areu762af5uqgkz5uk'
            },
            {
                currency: 'Ethereum',
                address: '0x8957c2BE53baa42DE8b56948c6fC23a206249164'
            },
            {
                currency: 'Tether',
                address: 'TRHpmkD3KmJmGDNBnaH1rPkBVmiyX3qfcb'
            },
        ],
    },
    contact_info: {
        phone_number: {
            title: `Всі довідки за телефоном:`,
            phone: '+38(050)02-45-888',
        },
        email_address: {
            title: `Пропозиції та зауваження просимо надсилати на E-Mail:`,
            email: 'volunteershield@gmail.com'
        }
    }
}


export default ua;