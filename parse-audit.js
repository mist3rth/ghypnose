import fs from 'fs';

const data = JSON.parse(fs.readFileSync('localhost_5173-20260929T110914.json', 'utf8'));

console.log('Performance Score:', data.categories.performance?.score);

const audits = Object.values(data.audits).filter(a => 
  a.score !== null && a.score < 1 && a.scoreDisplayMode !== 'notApplicable' && a.scoreDisplayMode !== 'informative'
);

console.log('\nIssues to fix:');
audits.forEach(a => {
  console.log(`- ${a.id}: ${a.title} (Score: ${a.score})`);
});
