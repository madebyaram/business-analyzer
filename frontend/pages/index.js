import BusinessAnalyzer from '../components/BusinessAnalyzer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Business Opportunity Analyzer
        </h1>
        <BusinessAnalyzer />
      </main>
    </div>
  );
}