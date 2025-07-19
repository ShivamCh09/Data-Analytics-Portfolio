
import { NextResponse } from 'next/server';

export async function GET() {
  const projects = [
    {
      id: 1,
      title: 'SQL: Retail Sales Analysis',
      description: 'Analyzed a retail sales database to identify top-selling products and customer segments. Utilized complex SQL queries to extract and aggregate data.',
      link: '#'
    },
    {
      id: 2,
      title: 'Python: Customer Churn Prediction',
      description: 'Developed a machine learning model to predict customer churn using Python, Pandas, and Scikit-learn. Achieved 85% accuracy.',
      link: '#'
    },
    {
      id: 3,
      title: 'Power BI: Business Dashboard',
      description: 'Created an interactive Power BI dashboard to visualize key business metrics and KPIs, enabling real-time data exploration.',
      link: '#'
    }
  ];

  return NextResponse.json(projects);
}
