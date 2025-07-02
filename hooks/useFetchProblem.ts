import { DBProblem } from "@/data/problems";
import { firestore } from "@/firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"

export const useFetchProblem = (id: DBProblem['id']) => {
    const [problem, setProblem] = useState<DBProblem | null>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>();

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                const problemsCollection = collection(firestore, 'problems');
                const problemDocRef = doc(problemsCollection, id)

                const problemDoc = await getDoc(problemDocRef);
                if (problemDoc.exists()) {
                    setProblem(problemDoc.data() as DBProblem)
                }

            } catch (error) {
                setError(error instanceof Error ? error.message : 'Error loading problem')
            } finally {
                setLoading(false)
            }
        }

        fetchProblem();
    }, [id])

    return { problem, setProblem, loading, error }
}