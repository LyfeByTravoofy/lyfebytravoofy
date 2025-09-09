export default function FontTest() {
  return (
    <div className="p-8">
      <h1 className="font-dynapuff text-4xl mb-4">DynaPuff Regular Test - 400 weight</h1>
      <h2 className="font-dynapuff text-3xl mb-4" style={{fontWeight: 500}}>DynaPuff Medium - 500 weight</h2>
      <h3 className="font-dynapuff text-2xl mb-4" style={{fontWeight: 600}}>DynaPuff SemiBold - 600 weight</h3>
      <h4 className="font-dynapuff text-xl mb-4" style={{fontWeight: 700}}>DynaPuff Bold - 700 weight</h4>
      
      <p className="text-lg mb-4">This should be in Inter font (default).</p>
      <p className="font-dynapuff text-lg">This should be in DynaPuff regular weight.</p>
    </div>
  )
}