drop schema ccct10;
create schema ccct10;

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