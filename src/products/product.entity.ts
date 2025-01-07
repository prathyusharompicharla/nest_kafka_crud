const {Entity,Column,PrimaryGeneratedColumn} = require('typeorm');

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type:'varchar'})
    name;
    @Column({type:'decimal'})
    price;
    @Column({type:'varchar'})
    description;
}

// module.exports = {Product}