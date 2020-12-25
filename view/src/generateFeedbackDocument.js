import { firestore } from "./firebase"


export const generateFeedbackDocument = async (name, email, message) => {

    const feedbackRef = firestore.doc(`feedback/${email}`)
    const snapshot = await feedbackRef.get()


    if(!snapshot.exitst) {
        try {
            await feedbackRef.set({
                name,
                email,
                message
                
            })
        } catch(error) {
            console.log("Error creating feedback document")
        }
    }
    return getFeedbackDocument(email)
}

const getFeedbackDocument = async email => {
    if(!email) return null

    try{
        const feedbackDocument = await firestore.doc(`feedback/${email}`).get()
        return {
            email,
            ...feedbackDocument.data()
        }
    } catch (error) {
        console.log("Error fetching user", error)
    }
}