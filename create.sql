drop schema ccct10;
create schema ccct10;

drop table ccct10.product;
create table ccct10.product (
    id_product int,
    description text,
    price numeric
);

insert into ccct10.product (
    id_product,
    description,
    price
) values (1, 'A', 1000);

insert into ccct10.product (
    id_product,
    description,
    price
) values (2, 'B', 5000);

insert into ccct10.product (
    id_product,
    description,
    price
) values (3, 'C', 30);

drop table ccct10.cupom;
create table ccct10.cupom (
    id_cupom int,
    code text,
    percentage numeric,
    expires_date date
);

insert into ccct10.cupom (
    id_cupom,
    code,
    percentage,
    expires_date
) values (1, 'VALE10', 10, '2026-01-01');

insert into ccct10.cupom (
    id_cupom,
    code,
    percentage,
    expires_date
) values (1, 'VALE20', 20, '2021-01-01');