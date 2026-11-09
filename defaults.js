// Default forms (editable later inside the app via Form builder). types: text textarea number date select multi heading
let _n=0;const f=(label,type='text',options=[],remark=false)=>({id:'f'+(++_n),label,type,options,remark});
const GB=['Good','Fair','Poor'],NA=['Normal','Abnormal'];
const DEFAULT_FORMS=[
{id:'monthly',name:'Monthly Home Visit',fields:[
f('1. Presenting complaints','heading'),f('History of the presenting complaints','textarea'),
f('2. Social history','heading'),f('People living in the room','number'),f('Size of room','select',['Small','Medium','Large']),
f('3. Environmental history','heading'),f('Ventilation of the room','select',['Good','Bad']),f('Drinking water','select',['Good','Bad']),
f('4. Personal history','heading'),f('Appetite','select',GB),f('Bowel movement','select',['Normal','Constipated','Diarrhoea','Incontinent']),f('Hygiene','select',GB),f('Sleeping pattern','select',['Good','Disturbed','Poor']),
f('5. General examination','heading'),f('General appearance','select',['Well','Ill-looking','Frail','Cachectic']),f('Temperature (°C)','number'),f('Blood pressure'),f('Pulse rate','number'),f('Respiratory rate','number'),
f('Signs','multi',['Jaundice','Cyanosis','Clubbing','Edema','Dehydration','Pallor','Petechiae','Anasarca','Koilonychias','Lymph nodes']),
f('Consciousness','select',['Alert','Responds to voice','Responds to pain','Unresponsive']),
f('6. Systemic examination','heading'),f('Cardiovascular system','select',NA,true),f('Respiratory system','select',NA,true),f('Abdomen','select',NA,true),f('Central nervous system','select',NA,true),
f('7. Medication & remarks','heading'),f('Current medication history','textarea'),f('Remarks','textarea'),
f('Sign-off','heading'),f('Name of HW'),f('Name of Nurse'),f('Name of Doctor')]},
{id:'weekly',name:'Weekly Visit',fields:[
f('Temperature (°C)','number','',true),f('Respiratory rate','number','',true),f('Pulse rate','number','',true),f('Blood pressure','text','',true),f('SpO2 (%)','number','',true),
f('Personal hygiene','select',GB,true),f('Environmental cleanliness','select',GB,true),f('Presenting complaint','select',['Same','Improved','Worse'],true),f('New complaint','select',['No','Yes'],true),
f('Treatment','select',['Regular','Not regular'],true),f('Appetite','select',GB,true),f('Urine','select',['Normal','Catheter','Retention','Incontinent'],true),
f('Motion','select',['Normal','Constipated','Diarrhoea','Incontinent'],true),f('Exercise','select',['Regular','Not regular'],true),f('Bed sore','select',['None','Stage 1','Stage 2','Stage 3','Stage 4'],true),f('Name of H.O')]},
{id:'tube',name:'NG Tube / Foley\'s Catheter Chart',fields:[f('Type','select',['NG tube','Foley\'s catheter']),f('Inserted date','date'),f('Size'),f('Inserted by'),f('Next visit','date'),f('Remarks','textarea')]},
{id:'bp',name:'BP Monitoring',fields:[f('Session','select',['Morning','Night']),f('Time'),f('Blood pressure'),f('Remarks')]},
{id:'nnote',name:'Nurses Note',fields:[f('Time'),f('Particulars','textarea'),f('Name & signature')]}
].map(x=>({...x,updated:0}));
