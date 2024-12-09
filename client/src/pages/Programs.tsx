import { useEffect, useState } from "react";

const Programs = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/programs");
        if (!response.ok) throw new Error("Erreur lors du fetch");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Erreur : {error}</div>;
  if (!data) return <div>chargement....</div>;

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Programs;
