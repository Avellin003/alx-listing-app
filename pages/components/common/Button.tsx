interface ButtonProps {
  buttontext: string;
}

export default function Button({ buttontext }: ButtonProps) {
    return (
        <button className=" px-4 py-2 rounded">
            {buttontext}
        </button>
    );
}