import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { Problem } from "@/data/problems";
import { firestore } from "@/firebase/firebase";


export const useFetchProblems = () => {
    const [loading, setLoading] = useState(true);
    const [problems, setProblems] = useState<Problem[]>([])
    const [error, setError] = useState<string | null>()

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const problemsCollection = collection(firestore, "problems");
                const q = query(problemsCollection, orderBy("order", "asc"));

                const querySnapshot = await getDocs(q);
                const problemData: Problem[] = []
                querySnapshot.forEach(el => (
                    problemData.push(el.data() as Problem)
                ))
                setProblems(problemData)

            } catch (error) {
                setError(error instanceof Error ? error.message : "Error fetching problems")
            } finally {
                setLoading(false)
            }
        }

        fetchProblems();

    }, [])

    return { problems, loading, error };
}