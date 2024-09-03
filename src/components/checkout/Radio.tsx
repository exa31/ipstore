interface RadioProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Radio({ value, onChange }: RadioProps) {
    return (
        <input type="radio" value={value} onChange={onChange} name="radio-1" className="radio border-black" />
    )
};