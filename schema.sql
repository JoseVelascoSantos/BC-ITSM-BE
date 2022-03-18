create table company
(
    cif     varchar(9)   not null
        primary key,
    name    varchar(255) null,
    address varchar(255) null
);

create table customer
(
    ethAddress varchar(42)  not null
        primary key,
    dni         varchar(10)  null,
    name        varchar(255) null,
    surname     varchar(255) null,
    email       varchar(255) null,
    phone       varchar(20)  null,
    gender      bit          null,
    province    varchar(255) null,
    city        varchar(255) null,
    country     int          null
);

create table sla
(
    id       int         not null
        primary key,
    customer varchar(42) null,
    company  varchar(9)  null,
    price  int null,
    constraint sla_fk_company
        foreign key (company) references company (cif)
            on update cascade on delete cascade,
    constraint sla_fk_customer
        foreign key (customer) references customer (ethAddress)
            on update cascade on delete cascade
);

