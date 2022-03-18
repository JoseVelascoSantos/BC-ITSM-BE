DELETE FROM customer;
DELETE FROM company;

INSERT INTO customer VALUES (
                                 '0x1663b5f5A048B8bc99449Ff3E2A6E0fbfe8069ac',
                                 '27699988F',
                                 'José',
                                 'Velasco Santos',
                                 'jovelasc@ucm.es',
                                 '666555444',
                                 0,
                                 'Madrid',
                                 'Madrid',
                                 0
                            );

INSERT INTO customer VALUES (
                                '0x7a9AC18769eF19E64619E80823d2DE8007c06ef5',
                                'Y7166898C',
                                'Yule',
                                'Zhang',
                                'yulzhang@ucm.es',
                                '555444333',
                                1,
                                'Madrid',
                                'Madrid',
                                0
                            );

INSERT INTO customer VALUES (
                                '0x73e84531bF7B80A92812a56f6FbdC43510AFD1dD',
                                '23445454J',
                                'Margarita',
                                'Robles',
                                'margarob@gmail.com',
                                '111222333',
                                1,
                                'Sevilla',
                                'Sevilla',
                                0
                            );

INSERT INTO customer VALUES (
                                '0xf113b49f5dcC1edF65F4392425A3aCE9c73bB8db',
                                '96040495Q',
                                'Manolo',
                                'Bakes',
                                'mankes@gmail.com',
                                '999888777',
                                0,
                                'Barcelona',
                                'Barcelona',
                                0
                            );

INSERT INTO company VALUES (
                               'U97133888',
                               'FdI - UCM',
                               'Ciudad Universitaria Madrid'
                           );

INSERT INTO company VALUES (
                               'W3592495J',
                               'Anchor Consultorias S.L.',
                               'Plaza mayor Sevilla'
                           );

INSERT INTO company VALUES (
                               'B10968972',
                               'Manolo Bakes S.L.',
                               'Plaza España Barcelona'
                           );

INSERT INTO sla VALUES (
                            1,
                            '0x1663b5f5A048B8bc99449Ff3E2A6E0fbfe8069ac',
                            'U97133888',
                            '10030'
                       );

INSERT INTO sla VALUES (
                           2,
                           '0x73e84531bF7B80A92812a56f6FbdC43510AFD1dD',
                           'W3592495J',
                           '24000'
                       );

INSERT INTO sla VALUES (
                           3,
                           '0x7a9AC18769eF19E64619E80823d2DE8007c06ef5',
                           'U97133888',
                           '12540'
                       );

INSERT INTO sla VALUES (
                           4,
                           '0xf113b49f5dcC1edF65F4392425A3aCE9c73bB8db',
                           'B10968972',
                           '16340'
                       );
