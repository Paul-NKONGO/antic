const BASE_URL = "http://192.168.1.132:5001/api/division"

export async function CreateDivision(data) {
  try {
    console.log(BASE_URL)
    const response = await fetch(`${BASE_URL}/create-division`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error(` ${JSON.stringify(response.json())}`)
    }
    return response.json()
  } catch (error) {
    console.error('Error creating subscription:', error)
    throw error // Re-throw the error to be handled by the caller
  }
}






