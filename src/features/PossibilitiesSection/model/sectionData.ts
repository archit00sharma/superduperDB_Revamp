/* eslint-disable prettier/prettier */
export const possibilitiesTabs = [
  {
    label: 'Deploy & Compute',
    code: `from superduperdb import superduper 
from sentence_transformers import SentenceTransformer

model = superduper(
    SentenceTransformer('all-MiniLM-L6-v2')
)

model.predict(
    X='input_col',
    db=db,
    select=Collection(name='test_documents')
)
`,
    paragraphId: 'paragraph-0', // Add the paragraph ID
  },
  {
    label: 'Train Models',
    code: `from superduperdb import superduper 
from sklearn.svm import SVC 

svc = superduper(SVC())       # create a superduper model 
svc.fit( 
    X='X', 
    y='y', 
    database=my_db, 
    select=Collection('docs').find({'my_filter_key': 'my_value'}),
)
`,
    paragraphId: 'paragraph-1', // Add the paragraph ID
  },
  {
    label: 'Integrate APIs',
    code: `from superduperdb.ext.openai import OpenAIEmbedding

model = OpenAIEmbedding(identifier='text-embedding-ada-002')

model.predict(
    X='input_col',
    db=db,
    select=Collection(name='test_documents')
)
`,
    paragraphId: 'paragraph-2', // Add the paragraph ID
  },
  {
    label: 'Vector Search',
    code: `db.add(
    VectorIndex(
        identifier='my-index',
        indexing_listener=Listener(
            model=OpenAIEmbedding(identifier='text-embedding-ada-002'),
            key='abstract',
            select=Collection(name='wikipedia').find(),
        ),
    )
)
# vector-search available across datastores via \`.like\` method
cur = db.execute(
    Collection(name='wikipedia')
        .like({'abstract': 'philosophers'}, n=10, vector_index='my-index')
)
`,
    paragraphId: 'paragraph-3', // Add the paragraph ID
  },
];
