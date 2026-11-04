interface User {
  name: string;
  role: string;
}

interface Blog {
  title: string;
  description: string;
  date: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  status: number;
}


type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;


const userRes: UserResponse = {
    data:{
        name: "Araf",
        role: "user"
    },
    success: true,
    status: 200
}

console.log(userRes);