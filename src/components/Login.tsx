import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import axios from "axios"
import { useState } from "react"
import { toast } from "sonner"

const Login = ()=> {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const login = async () =>{
        if(!username || !password){
            toast.error("Enter your username and password");
        }
        try {
            await axios.post(`api/login`,{username,password})
            .then((res)=>{
                toast.success(res.data.message);
            })
            .catch((error)=>{
                toast.error(error.response?.data?.message);
            })
        } catch (error) {
            
        } finally{

        }
    }
  return (
    <div className="mx-[3vw] flex justify-center">
    <Tabs defaultValue="account" className="mt-24 w-full md:max-w-[40rem]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Login</TabsTrigger>
        <TabsTrigger value="password">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>

          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input value={username} onChange={(e)=>setUsername(e.target.value)} id="username" placeholder="username"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input  value={password} onChange={(e)=>setPassword(e.target.value)} id="password" placeholder="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={()=>login()} className="bg-primary hover:bg-primaryhover w-full">Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Email</Label>
              <Input id="current" type="email" placeholder="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Username</Label>
              <Input id="new" type="text" placeholder="username" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input id="new" type="password" placeholder="password" />
            </div>
          </CardContent>
          <CardFooter>
          <Button className="bg-primary hover:bg-primaryhover w-full">Sign Up</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default Login