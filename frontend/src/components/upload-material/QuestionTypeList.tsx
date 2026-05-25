
import QuestionTypeRow from "./QuestionTypeRow";

type QuestionType = {
  type: string;
  count: number;
  marks: number;
};

type Props = {
  mobile?: boolean;

  questionTypes: QuestionType[];

  setQuestionTypes: (
    value: QuestionType[]
  ) => void;
};

export default function QuestionTypeList({
  mobile = false,
  questionTypes,
  setQuestionTypes,
}: Props) {
  const updateQuestion = (
    index: number,
    field: string,
    value: any
  ) => {
    const updated = [...questionTypes];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setQuestionTypes(updated);
  };

  const removeQuestion = (
    index: number
  ) => {
    const updated =
      questionTypes.filter(
        (_, i) => i !== index
      );

    setQuestionTypes(updated);
  };

  const addQuestionType = () => {
    setQuestionTypes([
      ...questionTypes,

      {
        type: "",
        count: 1,
        marks: 1,
      },
    ]);
  };

  return (
    <div>
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <h3
          className={`
            font-[700]

            text-[#1F1F1F]

            ${
              mobile
                ? "text-[15px]"
                : "text-[18px]"
            }
          `}
        >
          Question Types
        </h3>

        <button
          onClick={addQuestionType}
          className="
            h-[42px]

            rounded-full

            bg-[#111111]

            px-[18px]

            text-white
            text-[14px]
            font-[600]
          "
        >
          + Add
        </button>
      </div>

      <div className="mt-[18px] flex flex-col gap-[14px]">
        {questionTypes.map(
          (question, index) => (
            <QuestionTypeRow
              key={index}
              mobile={mobile}
              data={question}
              onChange={updateQuestion}
              onDelete={removeQuestion}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
}