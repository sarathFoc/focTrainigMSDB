import { IsNotEmpty, Length } from "class-validator";

export class createBlogDto{
    
    @IsNotEmpty({ message: "blog should have a title" })

    @Length(3, 20)

    title: string;

    @Length(3)

    blog: string;

    @IsNotEmpty()
    userId: number
}
