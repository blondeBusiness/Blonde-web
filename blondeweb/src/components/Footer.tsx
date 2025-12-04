import React from "react";
import {Form, Input, Button} from "@heroui/react";


export default function Footer(){
    const [action, setAction] = React.useState<string | null>(null);

    return(
    <div className="flex flex-row   justify-between gap-2 mr-20 ml-20">
    <Form
      className="w-full max-w-xs flex flex-col gap-4"
      onReset={() => setAction("reset")}
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));

        setAction(`submit ${JSON.stringify(data)}`);
      }}
    >
      <Input
        isRequired
        errorMessage="Please enter a valid username"
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
        type="text"
      />

      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />

<Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />


<Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <div className="flex gap-2">
        <Button color="primary" type="submit">
          Submit
        </Button>
        <Button type="reset" variant="flat">
          Reset
        </Button>
      </div>
      {action && (
        <div className="text-small text-default-500">
          Action: <code>{action}</code>
        </div>
      )}
    </Form>

    <div>
    <h1 className="text-7xl font-bold leading-none">
    <span className="text-white">Design your</span> <br />
            <span
              className="
                animate-purple-shift
                bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-400
                bg-clip-text text-transparent
              "
            >
              future now
            </span>
            </h1>
    </div>

    </div>)
}