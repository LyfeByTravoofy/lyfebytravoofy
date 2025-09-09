// import { NextRequest, NextResponse } from 'next/server'

// export async function POST(request: NextRequest) {
//   try {
//     const { message } = await request.json()

//     // Simple response logic - in a real app, you'd integrate with an AI API
//     const responses: { [key: string]: string } = {
//       'hello': 'Hello! I\'m your Lyfe Travels assistant. How can I help you plan your next adventure?',
//       'hi': 'Hi there! What would you like to know about our travel packages?',
//       'recommend': 'Based on your preferences, I would recommend our Tropical Paradise package! It includes flights, 7-night luxury resort stay, daily breakfast, and guided island tours.',
//       'europe': 'Our European Explorer package visits France, Italy, and Spain over 14 days. It includes guided tours of historical sites, luxury accommodations, and authentic dining experiences.',
//       'budget': 'We have several budget-friendly options! Our Weekend Getaway packages start at just $299 per person for 3 days/2 nights.',
//       'family': 'For families, I recommend our Family Fun package which includes kid-friendly activities, accommodations with family suites, and special discounts for children.',
//       'beach': 'Our Beach Bliss package offers 7 days in Bali with private villa accommodation, spa treatments, and daily water activities. Perfect for relaxation!',
//       'adventure': 'Thrill-seekers love our Adventure Seeker package which includes hiking, zip-lining, and white-water rafting in Costa Rica\'s rainforests.',
//       'default': 'I\'m specialized in helping with travel planning. You can ask me about destinations, package recommendations, budget options, or specific interests like family travel, beaches, or adventure activities.'
//     }

//     const lowerMessage = message.toLowerCase()
//     let response = responses.default

//     if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
//       response = responses.hello
//     } else if (lowerMessage.includes('recommend') || lowerMessage.includes('suggestion')) {
//       response = responses.recommend
//     } else if (lowerMessage.includes('europe')) {
//       response = responses.europe
//     } else if (lowerMessage.includes('budget') || lowerMessage.includes('cheap') || lowerMessage.includes('affordable')) {
//       response = responses.budget
//     } else if (lowerMessage.includes('family') || lowerMessage.includes('children') || lowerMessage.includes('kids')) {
//       response = responses.family
//     } else if (lowerMessage.includes('beach') || lowerMessage.includes('island') || lowerMessage.includes('tropical')) {
//       response = responses.beach
//     } else if (lowerMessage.includes('adventure') || lowerMessage.includes('hiking') || lowerMessage.includes('rafting')) {
//       response = responses.adventure
//     }

//     // Simulate a delay like a real API call
//     await new Promise(resolve => setTimeout(resolve, 1000))

//     return NextResponse.json({ response })
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }import { NextRequest, NextResponse } from 'next/server'

// export async function POST(request: NextRequest) {
//   try {
//     const { message } = await request.json()

//     // Simple response logic - in a real app, you'd integrate with an AI API
//     const responses: { [key: string]: string } = {
//       'hello': 'Hello! I\'m your Lyfe Travels assistant. How can I help you plan your next adventure?',
//       'hi': 'Hi there! What would you like to know about our travel packages?',
//       'recommend': 'Based on your preferences, I would recommend our Tropical Paradise package! It includes flights, 7-night luxury resort stay, daily breakfast, and guided island tours.',
//       'europe': 'Our European Explorer package visits France, Italy, and Spain over 14 days. It includes guided tours of historical sites, luxury accommodations, and authentic dining experiences.',
//       'budget': 'We have several budget-friendly options! Our Weekend Getaway packages start at just $299 per person for 3 days/2 nights.',
//       'family': 'For families, I recommend our Family Fun package which includes kid-friendly activities, accommodations with family suites, and special discounts for children.',
//       'beach': 'Our Beach Bliss package offers 7 days in Bali with private villa accommodation, spa treatments, and daily water activities. Perfect for relaxation!',
//       'adventure': 'Thrill-seekers love our Adventure Seeker package which includes hiking, zip-lining, and white-water rafting in Costa Rica\'s rainforests.',
//       'default': 'I\'m specialized in helping with travel planning. You can ask me about destinations, package recommendations, budget options, or specific interests like family travel, beaches, or adventure activities.'
//     }

//     const lowerMessage = message.toLowerCase()
//     let response = responses.default

//     if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
//       response = responses.hello
//     } else if (lowerMessage.includes('recommend') || lowerMessage.includes('suggestion')) {
//       response = responses.recommend
//     } else if (lowerMessage.includes('europe')) {
//       response = responses.europe
//     } else if (lowerMessage.includes('budget') || lowerMessage.includes('cheap') || lowerMessage.includes('affordable')) {
//       response = responses.budget
//     } else if (lowerMessage.includes('family') || lowerMessage.includes('children') || lowerMessage.includes('kids')) {
//       response = responses.family
//     } else if (lowerMessage.includes('beach') || lowerMessage.includes('island') || lowerMessage.includes('tropical')) {
//       response = responses.beach
//     } else if (lowerMessage.includes('adventure') || lowerMessage.includes('hiking') || lowerMessage.includes('rafting')) {
//       response = responses.adventure
//     }

//     // Simulate a delay like a real API call
//     await new Promise(resolve => setTimeout(resolve, 1000))

//     return NextResponse.json({ response })
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     )
//   }
// }