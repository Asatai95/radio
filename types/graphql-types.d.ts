export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type CloudinaryMedia = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  asset_id?: Maybe<Scalars['String']>;
  public_id?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  resource_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  bytes?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  secure_url?: Maybe<Scalars['String']>;
};


export type CloudinaryMediaCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type CloudinaryMediaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<CloudinaryMediaEdge>;
  nodes: Array<CloudinaryMedia>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<CloudinaryMediaGroupConnection>;
};


export type CloudinaryMediaConnectionDistinctArgs = {
  field: CloudinaryMediaFieldsEnum;
};


export type CloudinaryMediaConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: CloudinaryMediaFieldsEnum;
};

export type CloudinaryMediaEdge = {
  next?: Maybe<CloudinaryMedia>;
  node: CloudinaryMedia;
  previous?: Maybe<CloudinaryMedia>;
};

export type CloudinaryMediaFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'asset_id'
  | 'public_id'
  | 'format'
  | 'version'
  | 'resource_type'
  | 'type'
  | 'created_at'
  | 'bytes'
  | 'width'
  | 'height'
  | 'url'
  | 'secure_url';

export type CloudinaryMediaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  asset_id?: Maybe<StringQueryOperatorInput>;
  public_id?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<IntQueryOperatorInput>;
  resource_type?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  bytes?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  secure_url?: Maybe<StringQueryOperatorInput>;
};

export type CloudinaryMediaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<CloudinaryMediaEdge>;
  nodes: Array<CloudinaryMedia>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type CloudinaryMediaSortInput = {
  fields?: Maybe<Array<Maybe<CloudinaryMediaFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentful_id'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetFilterListInput = {
  elemMatch?: Maybe<ContentfulAssetFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthor = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  twitterHandle?: Maybe<Scalars['String']>;
  profilePhoto?: Maybe<ContentfulAsset>;
  biography?: Maybe<ContentfulAuthorBiographyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAuthorSys>;
  node_locale?: Maybe<Scalars['String']>;
  photo_gallery?: Maybe<Array<Maybe<ContentfulPhotoGallery>>>;
  childContentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNode>;
};


export type ContentfulAuthorCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAuthorUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorBiographyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  biography?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulAuthorBiographyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorBiographyTextNodeEdge>;
  nodes: Array<ContentfulAuthorBiographyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAuthorBiographyTextNodeGroupConnection>;
};


export type ContentfulAuthorBiographyTextNodeConnectionDistinctArgs = {
  field: ContentfulAuthorBiographyTextNodeFieldsEnum;
};


export type ContentfulAuthorBiographyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAuthorBiographyTextNodeFieldsEnum;
};

export type ContentfulAuthorBiographyTextNodeEdge = {
  next?: Maybe<ContentfulAuthorBiographyTextNode>;
  node: ContentfulAuthorBiographyTextNode;
  previous?: Maybe<ContentfulAuthorBiographyTextNode>;
};

export type ContentfulAuthorBiographyTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'biography'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulAuthorBiographyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  biography?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulAuthorBiographyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorBiographyTextNodeEdge>;
  nodes: Array<ContentfulAuthorBiographyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorBiographyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAuthorBiographyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthorConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorEdge>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAuthorGroupConnection>;
};


export type ContentfulAuthorConnectionDistinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};


export type ContentfulAuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorEdge = {
  next?: Maybe<ContentfulAuthor>;
  node: ContentfulAuthor;
  previous?: Maybe<ContentfulAuthor>;
};

export type ContentfulAuthorFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'twitterHandle'
  | 'profilePhoto___id'
  | 'profilePhoto___parent___id'
  | 'profilePhoto___parent___parent___id'
  | 'profilePhoto___parent___parent___children'
  | 'profilePhoto___parent___children'
  | 'profilePhoto___parent___children___id'
  | 'profilePhoto___parent___children___children'
  | 'profilePhoto___parent___internal___content'
  | 'profilePhoto___parent___internal___contentDigest'
  | 'profilePhoto___parent___internal___description'
  | 'profilePhoto___parent___internal___fieldOwners'
  | 'profilePhoto___parent___internal___ignoreType'
  | 'profilePhoto___parent___internal___mediaType'
  | 'profilePhoto___parent___internal___owner'
  | 'profilePhoto___parent___internal___type'
  | 'profilePhoto___children'
  | 'profilePhoto___children___id'
  | 'profilePhoto___children___parent___id'
  | 'profilePhoto___children___parent___children'
  | 'profilePhoto___children___children'
  | 'profilePhoto___children___children___id'
  | 'profilePhoto___children___children___children'
  | 'profilePhoto___children___internal___content'
  | 'profilePhoto___children___internal___contentDigest'
  | 'profilePhoto___children___internal___description'
  | 'profilePhoto___children___internal___fieldOwners'
  | 'profilePhoto___children___internal___ignoreType'
  | 'profilePhoto___children___internal___mediaType'
  | 'profilePhoto___children___internal___owner'
  | 'profilePhoto___children___internal___type'
  | 'profilePhoto___internal___content'
  | 'profilePhoto___internal___contentDigest'
  | 'profilePhoto___internal___description'
  | 'profilePhoto___internal___fieldOwners'
  | 'profilePhoto___internal___ignoreType'
  | 'profilePhoto___internal___mediaType'
  | 'profilePhoto___internal___owner'
  | 'profilePhoto___internal___type'
  | 'profilePhoto___contentful_id'
  | 'profilePhoto___file___url'
  | 'profilePhoto___file___details___size'
  | 'profilePhoto___file___fileName'
  | 'profilePhoto___file___contentType'
  | 'profilePhoto___title'
  | 'profilePhoto___description'
  | 'profilePhoto___node_locale'
  | 'profilePhoto___fixed___base64'
  | 'profilePhoto___fixed___tracedSVG'
  | 'profilePhoto___fixed___aspectRatio'
  | 'profilePhoto___fixed___width'
  | 'profilePhoto___fixed___height'
  | 'profilePhoto___fixed___src'
  | 'profilePhoto___fixed___srcSet'
  | 'profilePhoto___fixed___srcWebp'
  | 'profilePhoto___fixed___srcSetWebp'
  | 'profilePhoto___resolutions___base64'
  | 'profilePhoto___resolutions___tracedSVG'
  | 'profilePhoto___resolutions___aspectRatio'
  | 'profilePhoto___resolutions___width'
  | 'profilePhoto___resolutions___height'
  | 'profilePhoto___resolutions___src'
  | 'profilePhoto___resolutions___srcSet'
  | 'profilePhoto___resolutions___srcWebp'
  | 'profilePhoto___resolutions___srcSetWebp'
  | 'profilePhoto___fluid___base64'
  | 'profilePhoto___fluid___tracedSVG'
  | 'profilePhoto___fluid___aspectRatio'
  | 'profilePhoto___fluid___src'
  | 'profilePhoto___fluid___srcSet'
  | 'profilePhoto___fluid___srcWebp'
  | 'profilePhoto___fluid___srcSetWebp'
  | 'profilePhoto___fluid___sizes'
  | 'profilePhoto___sizes___base64'
  | 'profilePhoto___sizes___tracedSVG'
  | 'profilePhoto___sizes___aspectRatio'
  | 'profilePhoto___sizes___src'
  | 'profilePhoto___sizes___srcSet'
  | 'profilePhoto___sizes___srcWebp'
  | 'profilePhoto___sizes___srcSetWebp'
  | 'profilePhoto___sizes___sizes'
  | 'profilePhoto___resize___base64'
  | 'profilePhoto___resize___tracedSVG'
  | 'profilePhoto___resize___src'
  | 'profilePhoto___resize___width'
  | 'profilePhoto___resize___height'
  | 'profilePhoto___resize___aspectRatio'
  | 'biography___id'
  | 'biography___parent___id'
  | 'biography___parent___parent___id'
  | 'biography___parent___parent___children'
  | 'biography___parent___children'
  | 'biography___parent___children___id'
  | 'biography___parent___children___children'
  | 'biography___parent___internal___content'
  | 'biography___parent___internal___contentDigest'
  | 'biography___parent___internal___description'
  | 'biography___parent___internal___fieldOwners'
  | 'biography___parent___internal___ignoreType'
  | 'biography___parent___internal___mediaType'
  | 'biography___parent___internal___owner'
  | 'biography___parent___internal___type'
  | 'biography___children'
  | 'biography___children___id'
  | 'biography___children___parent___id'
  | 'biography___children___parent___children'
  | 'biography___children___children'
  | 'biography___children___children___id'
  | 'biography___children___children___children'
  | 'biography___children___internal___content'
  | 'biography___children___internal___contentDigest'
  | 'biography___children___internal___description'
  | 'biography___children___internal___fieldOwners'
  | 'biography___children___internal___ignoreType'
  | 'biography___children___internal___mediaType'
  | 'biography___children___internal___owner'
  | 'biography___children___internal___type'
  | 'biography___internal___content'
  | 'biography___internal___contentDigest'
  | 'biography___internal___description'
  | 'biography___internal___fieldOwners'
  | 'biography___internal___ignoreType'
  | 'biography___internal___mediaType'
  | 'biography___internal___owner'
  | 'biography___internal___type'
  | 'biography___biography'
  | 'biography___childMarkdownRemark___id'
  | 'biography___childMarkdownRemark___frontmatter___title'
  | 'biography___childMarkdownRemark___excerpt'
  | 'biography___childMarkdownRemark___rawMarkdownBody'
  | 'biography___childMarkdownRemark___html'
  | 'biography___childMarkdownRemark___htmlAst'
  | 'biography___childMarkdownRemark___excerptAst'
  | 'biography___childMarkdownRemark___headings'
  | 'biography___childMarkdownRemark___headings___value'
  | 'biography___childMarkdownRemark___headings___depth'
  | 'biography___childMarkdownRemark___timeToRead'
  | 'biography___childMarkdownRemark___tableOfContents'
  | 'biography___childMarkdownRemark___wordCount___paragraphs'
  | 'biography___childMarkdownRemark___wordCount___sentences'
  | 'biography___childMarkdownRemark___wordCount___words'
  | 'biography___childMarkdownRemark___parent___id'
  | 'biography___childMarkdownRemark___parent___children'
  | 'biography___childMarkdownRemark___children'
  | 'biography___childMarkdownRemark___children___id'
  | 'biography___childMarkdownRemark___children___children'
  | 'biography___childMarkdownRemark___internal___content'
  | 'biography___childMarkdownRemark___internal___contentDigest'
  | 'biography___childMarkdownRemark___internal___description'
  | 'biography___childMarkdownRemark___internal___fieldOwners'
  | 'biography___childMarkdownRemark___internal___ignoreType'
  | 'biography___childMarkdownRemark___internal___mediaType'
  | 'biography___childMarkdownRemark___internal___owner'
  | 'biography___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'photo_gallery'
  | 'photo_gallery___id'
  | 'photo_gallery___parent___id'
  | 'photo_gallery___parent___parent___id'
  | 'photo_gallery___parent___parent___children'
  | 'photo_gallery___parent___children'
  | 'photo_gallery___parent___children___id'
  | 'photo_gallery___parent___children___children'
  | 'photo_gallery___parent___internal___content'
  | 'photo_gallery___parent___internal___contentDigest'
  | 'photo_gallery___parent___internal___description'
  | 'photo_gallery___parent___internal___fieldOwners'
  | 'photo_gallery___parent___internal___ignoreType'
  | 'photo_gallery___parent___internal___mediaType'
  | 'photo_gallery___parent___internal___owner'
  | 'photo_gallery___parent___internal___type'
  | 'photo_gallery___children'
  | 'photo_gallery___children___id'
  | 'photo_gallery___children___parent___id'
  | 'photo_gallery___children___parent___children'
  | 'photo_gallery___children___children'
  | 'photo_gallery___children___children___id'
  | 'photo_gallery___children___children___children'
  | 'photo_gallery___children___internal___content'
  | 'photo_gallery___children___internal___contentDigest'
  | 'photo_gallery___children___internal___description'
  | 'photo_gallery___children___internal___fieldOwners'
  | 'photo_gallery___children___internal___ignoreType'
  | 'photo_gallery___children___internal___mediaType'
  | 'photo_gallery___children___internal___owner'
  | 'photo_gallery___children___internal___type'
  | 'photo_gallery___internal___content'
  | 'photo_gallery___internal___contentDigest'
  | 'photo_gallery___internal___description'
  | 'photo_gallery___internal___fieldOwners'
  | 'photo_gallery___internal___ignoreType'
  | 'photo_gallery___internal___mediaType'
  | 'photo_gallery___internal___owner'
  | 'photo_gallery___internal___type'
  | 'photo_gallery___slug'
  | 'photo_gallery___tags'
  | 'photo_gallery___date'
  | 'photo_gallery___location___lon'
  | 'photo_gallery___location___lat'
  | 'photo_gallery___author___id'
  | 'photo_gallery___author___parent___id'
  | 'photo_gallery___author___parent___children'
  | 'photo_gallery___author___children'
  | 'photo_gallery___author___children___id'
  | 'photo_gallery___author___children___children'
  | 'photo_gallery___author___internal___content'
  | 'photo_gallery___author___internal___contentDigest'
  | 'photo_gallery___author___internal___description'
  | 'photo_gallery___author___internal___fieldOwners'
  | 'photo_gallery___author___internal___ignoreType'
  | 'photo_gallery___author___internal___mediaType'
  | 'photo_gallery___author___internal___owner'
  | 'photo_gallery___author___internal___type'
  | 'photo_gallery___author___name'
  | 'photo_gallery___author___twitterHandle'
  | 'photo_gallery___author___profilePhoto___id'
  | 'photo_gallery___author___profilePhoto___children'
  | 'photo_gallery___author___profilePhoto___contentful_id'
  | 'photo_gallery___author___profilePhoto___title'
  | 'photo_gallery___author___profilePhoto___description'
  | 'photo_gallery___author___profilePhoto___node_locale'
  | 'photo_gallery___author___biography___id'
  | 'photo_gallery___author___biography___children'
  | 'photo_gallery___author___biography___biography'
  | 'photo_gallery___author___spaceId'
  | 'photo_gallery___author___contentful_id'
  | 'photo_gallery___author___createdAt'
  | 'photo_gallery___author___updatedAt'
  | 'photo_gallery___author___sys___revision'
  | 'photo_gallery___author___node_locale'
  | 'photo_gallery___author___photo_gallery'
  | 'photo_gallery___author___photo_gallery___id'
  | 'photo_gallery___author___photo_gallery___children'
  | 'photo_gallery___author___photo_gallery___slug'
  | 'photo_gallery___author___photo_gallery___tags'
  | 'photo_gallery___author___photo_gallery___date'
  | 'photo_gallery___author___photo_gallery___images'
  | 'photo_gallery___author___photo_gallery___spaceId'
  | 'photo_gallery___author___photo_gallery___contentful_id'
  | 'photo_gallery___author___photo_gallery___createdAt'
  | 'photo_gallery___author___photo_gallery___updatedAt'
  | 'photo_gallery___author___photo_gallery___node_locale'
  | 'photo_gallery___author___childContentfulAuthorBiographyTextNode___id'
  | 'photo_gallery___author___childContentfulAuthorBiographyTextNode___children'
  | 'photo_gallery___author___childContentfulAuthorBiographyTextNode___biography'
  | 'photo_gallery___coverImage___id'
  | 'photo_gallery___coverImage___parent___id'
  | 'photo_gallery___coverImage___parent___children'
  | 'photo_gallery___coverImage___children'
  | 'photo_gallery___coverImage___children___id'
  | 'photo_gallery___coverImage___children___children'
  | 'photo_gallery___coverImage___internal___content'
  | 'photo_gallery___coverImage___internal___contentDigest'
  | 'photo_gallery___coverImage___internal___description'
  | 'photo_gallery___coverImage___internal___fieldOwners'
  | 'photo_gallery___coverImage___internal___ignoreType'
  | 'photo_gallery___coverImage___internal___mediaType'
  | 'photo_gallery___coverImage___internal___owner'
  | 'photo_gallery___coverImage___internal___type'
  | 'photo_gallery___coverImage___contentful_id'
  | 'photo_gallery___coverImage___file___url'
  | 'photo_gallery___coverImage___file___fileName'
  | 'photo_gallery___coverImage___file___contentType'
  | 'photo_gallery___coverImage___title'
  | 'photo_gallery___coverImage___description'
  | 'photo_gallery___coverImage___node_locale'
  | 'photo_gallery___coverImage___fixed___base64'
  | 'photo_gallery___coverImage___fixed___tracedSVG'
  | 'photo_gallery___coverImage___fixed___aspectRatio'
  | 'photo_gallery___coverImage___fixed___width'
  | 'photo_gallery___coverImage___fixed___height'
  | 'photo_gallery___coverImage___fixed___src'
  | 'photo_gallery___coverImage___fixed___srcSet'
  | 'photo_gallery___coverImage___fixed___srcWebp'
  | 'photo_gallery___coverImage___fixed___srcSetWebp'
  | 'photo_gallery___coverImage___resolutions___base64'
  | 'photo_gallery___coverImage___resolutions___tracedSVG'
  | 'photo_gallery___coverImage___resolutions___aspectRatio'
  | 'photo_gallery___coverImage___resolutions___width'
  | 'photo_gallery___coverImage___resolutions___height'
  | 'photo_gallery___coverImage___resolutions___src'
  | 'photo_gallery___coverImage___resolutions___srcSet'
  | 'photo_gallery___coverImage___resolutions___srcWebp'
  | 'photo_gallery___coverImage___resolutions___srcSetWebp'
  | 'photo_gallery___coverImage___fluid___base64'
  | 'photo_gallery___coverImage___fluid___tracedSVG'
  | 'photo_gallery___coverImage___fluid___aspectRatio'
  | 'photo_gallery___coverImage___fluid___src'
  | 'photo_gallery___coverImage___fluid___srcSet'
  | 'photo_gallery___coverImage___fluid___srcWebp'
  | 'photo_gallery___coverImage___fluid___srcSetWebp'
  | 'photo_gallery___coverImage___fluid___sizes'
  | 'photo_gallery___coverImage___sizes___base64'
  | 'photo_gallery___coverImage___sizes___tracedSVG'
  | 'photo_gallery___coverImage___sizes___aspectRatio'
  | 'photo_gallery___coverImage___sizes___src'
  | 'photo_gallery___coverImage___sizes___srcSet'
  | 'photo_gallery___coverImage___sizes___srcWebp'
  | 'photo_gallery___coverImage___sizes___srcSetWebp'
  | 'photo_gallery___coverImage___sizes___sizes'
  | 'photo_gallery___coverImage___resize___base64'
  | 'photo_gallery___coverImage___resize___tracedSVG'
  | 'photo_gallery___coverImage___resize___src'
  | 'photo_gallery___coverImage___resize___width'
  | 'photo_gallery___coverImage___resize___height'
  | 'photo_gallery___coverImage___resize___aspectRatio'
  | 'photo_gallery___images'
  | 'photo_gallery___images___id'
  | 'photo_gallery___images___parent___id'
  | 'photo_gallery___images___parent___children'
  | 'photo_gallery___images___children'
  | 'photo_gallery___images___children___id'
  | 'photo_gallery___images___children___children'
  | 'photo_gallery___images___internal___content'
  | 'photo_gallery___images___internal___contentDigest'
  | 'photo_gallery___images___internal___description'
  | 'photo_gallery___images___internal___fieldOwners'
  | 'photo_gallery___images___internal___ignoreType'
  | 'photo_gallery___images___internal___mediaType'
  | 'photo_gallery___images___internal___owner'
  | 'photo_gallery___images___internal___type'
  | 'photo_gallery___images___title'
  | 'photo_gallery___images___photo___id'
  | 'photo_gallery___images___photo___children'
  | 'photo_gallery___images___photo___contentful_id'
  | 'photo_gallery___images___photo___title'
  | 'photo_gallery___images___photo___description'
  | 'photo_gallery___images___photo___node_locale'
  | 'photo_gallery___images___photo_gallery'
  | 'photo_gallery___images___photo_gallery___id'
  | 'photo_gallery___images___photo_gallery___children'
  | 'photo_gallery___images___photo_gallery___slug'
  | 'photo_gallery___images___photo_gallery___tags'
  | 'photo_gallery___images___photo_gallery___date'
  | 'photo_gallery___images___photo_gallery___images'
  | 'photo_gallery___images___photo_gallery___spaceId'
  | 'photo_gallery___images___photo_gallery___contentful_id'
  | 'photo_gallery___images___photo_gallery___createdAt'
  | 'photo_gallery___images___photo_gallery___updatedAt'
  | 'photo_gallery___images___photo_gallery___node_locale'
  | 'photo_gallery___images___imageCaption___id'
  | 'photo_gallery___images___imageCaption___children'
  | 'photo_gallery___images___imageCaption___imageCaption'
  | 'photo_gallery___images___imageCredits___id'
  | 'photo_gallery___images___imageCredits___children'
  | 'photo_gallery___images___imageCredits___imageCredits'
  | 'photo_gallery___images___spaceId'
  | 'photo_gallery___images___contentful_id'
  | 'photo_gallery___images___createdAt'
  | 'photo_gallery___images___updatedAt'
  | 'photo_gallery___images___sys___revision'
  | 'photo_gallery___images___node_locale'
  | 'photo_gallery___images___childContentfulImageImageCaptionTextNode___id'
  | 'photo_gallery___images___childContentfulImageImageCaptionTextNode___children'
  | 'photo_gallery___images___childContentfulImageImageCaptionTextNode___imageCaption'
  | 'photo_gallery___images___childContentfulImageImageCreditsTextNode___id'
  | 'photo_gallery___images___childContentfulImageImageCreditsTextNode___children'
  | 'photo_gallery___images___childContentfulImageImageCreditsTextNode___imageCredits'
  | 'photo_gallery___title___id'
  | 'photo_gallery___title___parent___id'
  | 'photo_gallery___title___parent___children'
  | 'photo_gallery___title___children'
  | 'photo_gallery___title___children___id'
  | 'photo_gallery___title___children___children'
  | 'photo_gallery___title___internal___content'
  | 'photo_gallery___title___internal___contentDigest'
  | 'photo_gallery___title___internal___description'
  | 'photo_gallery___title___internal___fieldOwners'
  | 'photo_gallery___title___internal___ignoreType'
  | 'photo_gallery___title___internal___mediaType'
  | 'photo_gallery___title___internal___owner'
  | 'photo_gallery___title___internal___type'
  | 'photo_gallery___title___title'
  | 'photo_gallery___title___childMarkdownRemark___id'
  | 'photo_gallery___title___childMarkdownRemark___excerpt'
  | 'photo_gallery___title___childMarkdownRemark___rawMarkdownBody'
  | 'photo_gallery___title___childMarkdownRemark___html'
  | 'photo_gallery___title___childMarkdownRemark___htmlAst'
  | 'photo_gallery___title___childMarkdownRemark___excerptAst'
  | 'photo_gallery___title___childMarkdownRemark___headings'
  | 'photo_gallery___title___childMarkdownRemark___timeToRead'
  | 'photo_gallery___title___childMarkdownRemark___tableOfContents'
  | 'photo_gallery___title___childMarkdownRemark___children'
  | 'photo_gallery___description___id'
  | 'photo_gallery___description___parent___id'
  | 'photo_gallery___description___parent___children'
  | 'photo_gallery___description___children'
  | 'photo_gallery___description___children___id'
  | 'photo_gallery___description___children___children'
  | 'photo_gallery___description___internal___content'
  | 'photo_gallery___description___internal___contentDigest'
  | 'photo_gallery___description___internal___description'
  | 'photo_gallery___description___internal___fieldOwners'
  | 'photo_gallery___description___internal___ignoreType'
  | 'photo_gallery___description___internal___mediaType'
  | 'photo_gallery___description___internal___owner'
  | 'photo_gallery___description___internal___type'
  | 'photo_gallery___description___description'
  | 'photo_gallery___description___childMarkdownRemark___id'
  | 'photo_gallery___description___childMarkdownRemark___excerpt'
  | 'photo_gallery___description___childMarkdownRemark___rawMarkdownBody'
  | 'photo_gallery___description___childMarkdownRemark___html'
  | 'photo_gallery___description___childMarkdownRemark___htmlAst'
  | 'photo_gallery___description___childMarkdownRemark___excerptAst'
  | 'photo_gallery___description___childMarkdownRemark___headings'
  | 'photo_gallery___description___childMarkdownRemark___timeToRead'
  | 'photo_gallery___description___childMarkdownRemark___tableOfContents'
  | 'photo_gallery___description___childMarkdownRemark___children'
  | 'photo_gallery___spaceId'
  | 'photo_gallery___contentful_id'
  | 'photo_gallery___createdAt'
  | 'photo_gallery___updatedAt'
  | 'photo_gallery___sys___revision'
  | 'photo_gallery___node_locale'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___parent___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___parent___children'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___children'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___children___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___children___children'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___content'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___contentDigest'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___description'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___fieldOwners'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___ignoreType'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___mediaType'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___owner'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___type'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___title'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___excerpt'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___html'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___htmlAst'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___excerptAst'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___headings'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___timeToRead'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___tableOfContents'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___parent___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___parent___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___content'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___contentDigest'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___description'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___fieldOwners'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___ignoreType'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___mediaType'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___owner'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___type'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___description'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___excerpt'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___html'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___htmlAst'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___excerptAst'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___headings'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___timeToRead'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___tableOfContents'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___children'
  | 'childContentfulAuthorBiographyTextNode___id'
  | 'childContentfulAuthorBiographyTextNode___parent___id'
  | 'childContentfulAuthorBiographyTextNode___parent___parent___id'
  | 'childContentfulAuthorBiographyTextNode___parent___parent___children'
  | 'childContentfulAuthorBiographyTextNode___parent___children'
  | 'childContentfulAuthorBiographyTextNode___parent___children___id'
  | 'childContentfulAuthorBiographyTextNode___parent___children___children'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___content'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___contentDigest'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___description'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___fieldOwners'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___ignoreType'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___mediaType'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___owner'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___type'
  | 'childContentfulAuthorBiographyTextNode___children'
  | 'childContentfulAuthorBiographyTextNode___children___id'
  | 'childContentfulAuthorBiographyTextNode___children___parent___id'
  | 'childContentfulAuthorBiographyTextNode___children___parent___children'
  | 'childContentfulAuthorBiographyTextNode___children___children'
  | 'childContentfulAuthorBiographyTextNode___children___children___id'
  | 'childContentfulAuthorBiographyTextNode___children___children___children'
  | 'childContentfulAuthorBiographyTextNode___children___internal___content'
  | 'childContentfulAuthorBiographyTextNode___children___internal___contentDigest'
  | 'childContentfulAuthorBiographyTextNode___children___internal___description'
  | 'childContentfulAuthorBiographyTextNode___children___internal___fieldOwners'
  | 'childContentfulAuthorBiographyTextNode___children___internal___ignoreType'
  | 'childContentfulAuthorBiographyTextNode___children___internal___mediaType'
  | 'childContentfulAuthorBiographyTextNode___children___internal___owner'
  | 'childContentfulAuthorBiographyTextNode___children___internal___type'
  | 'childContentfulAuthorBiographyTextNode___internal___content'
  | 'childContentfulAuthorBiographyTextNode___internal___contentDigest'
  | 'childContentfulAuthorBiographyTextNode___internal___description'
  | 'childContentfulAuthorBiographyTextNode___internal___fieldOwners'
  | 'childContentfulAuthorBiographyTextNode___internal___ignoreType'
  | 'childContentfulAuthorBiographyTextNode___internal___mediaType'
  | 'childContentfulAuthorBiographyTextNode___internal___owner'
  | 'childContentfulAuthorBiographyTextNode___internal___type'
  | 'childContentfulAuthorBiographyTextNode___biography'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___id'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___html'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___headings'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___children'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___children___id'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___children___children'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulAuthorBiographyTextNode___childMarkdownRemark___internal___type';

export type ContentfulAuthorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  twitterHandle?: Maybe<StringQueryOperatorInput>;
  profilePhoto?: Maybe<ContentfulAssetFilterInput>;
  biography?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  photo_gallery?: Maybe<ContentfulPhotoGalleryFilterListInput>;
  childContentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
};

export type ContentfulAuthorGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorEdge>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAuthorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthorSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAuthorSysContentType>;
};

export type ContentfulAuthorSysContentType = {
  sys?: Maybe<ContentfulAuthorSysContentTypeSys>;
};

export type ContentfulAuthorSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

export type ContentfulAuthorSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAuthorSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  photo?: Maybe<ContentfulAsset>;
  photo_gallery?: Maybe<Array<Maybe<ContentfulPhotoGallery>>>;
  imageCaption?: Maybe<ContentfulImageImageCaptionTextNode>;
  imageCredits?: Maybe<ContentfulImageImageCreditsTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulImageSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulImageImageCaptionTextNode?: Maybe<ContentfulImageImageCaptionTextNode>;
  childContentfulImageImageCreditsTextNode?: Maybe<ContentfulImageImageCreditsTextNode>;
};


export type ContentfulImageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulImageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageEdge>;
  nodes: Array<ContentfulImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulImageGroupConnection>;
};


export type ContentfulImageConnectionDistinctArgs = {
  field: ContentfulImageFieldsEnum;
};


export type ContentfulImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulImageFieldsEnum;
};

export type ContentfulImageCropFocus = 
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageEdge = {
  next?: Maybe<ContentfulImage>;
  node: ContentfulImage;
  previous?: Maybe<ContentfulImage>;
};

export type ContentfulImageFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'photo___id'
  | 'photo___parent___id'
  | 'photo___parent___parent___id'
  | 'photo___parent___parent___children'
  | 'photo___parent___children'
  | 'photo___parent___children___id'
  | 'photo___parent___children___children'
  | 'photo___parent___internal___content'
  | 'photo___parent___internal___contentDigest'
  | 'photo___parent___internal___description'
  | 'photo___parent___internal___fieldOwners'
  | 'photo___parent___internal___ignoreType'
  | 'photo___parent___internal___mediaType'
  | 'photo___parent___internal___owner'
  | 'photo___parent___internal___type'
  | 'photo___children'
  | 'photo___children___id'
  | 'photo___children___parent___id'
  | 'photo___children___parent___children'
  | 'photo___children___children'
  | 'photo___children___children___id'
  | 'photo___children___children___children'
  | 'photo___children___internal___content'
  | 'photo___children___internal___contentDigest'
  | 'photo___children___internal___description'
  | 'photo___children___internal___fieldOwners'
  | 'photo___children___internal___ignoreType'
  | 'photo___children___internal___mediaType'
  | 'photo___children___internal___owner'
  | 'photo___children___internal___type'
  | 'photo___internal___content'
  | 'photo___internal___contentDigest'
  | 'photo___internal___description'
  | 'photo___internal___fieldOwners'
  | 'photo___internal___ignoreType'
  | 'photo___internal___mediaType'
  | 'photo___internal___owner'
  | 'photo___internal___type'
  | 'photo___contentful_id'
  | 'photo___file___url'
  | 'photo___file___details___size'
  | 'photo___file___fileName'
  | 'photo___file___contentType'
  | 'photo___title'
  | 'photo___description'
  | 'photo___node_locale'
  | 'photo___fixed___base64'
  | 'photo___fixed___tracedSVG'
  | 'photo___fixed___aspectRatio'
  | 'photo___fixed___width'
  | 'photo___fixed___height'
  | 'photo___fixed___src'
  | 'photo___fixed___srcSet'
  | 'photo___fixed___srcWebp'
  | 'photo___fixed___srcSetWebp'
  | 'photo___resolutions___base64'
  | 'photo___resolutions___tracedSVG'
  | 'photo___resolutions___aspectRatio'
  | 'photo___resolutions___width'
  | 'photo___resolutions___height'
  | 'photo___resolutions___src'
  | 'photo___resolutions___srcSet'
  | 'photo___resolutions___srcWebp'
  | 'photo___resolutions___srcSetWebp'
  | 'photo___fluid___base64'
  | 'photo___fluid___tracedSVG'
  | 'photo___fluid___aspectRatio'
  | 'photo___fluid___src'
  | 'photo___fluid___srcSet'
  | 'photo___fluid___srcWebp'
  | 'photo___fluid___srcSetWebp'
  | 'photo___fluid___sizes'
  | 'photo___sizes___base64'
  | 'photo___sizes___tracedSVG'
  | 'photo___sizes___aspectRatio'
  | 'photo___sizes___src'
  | 'photo___sizes___srcSet'
  | 'photo___sizes___srcWebp'
  | 'photo___sizes___srcSetWebp'
  | 'photo___sizes___sizes'
  | 'photo___resize___base64'
  | 'photo___resize___tracedSVG'
  | 'photo___resize___src'
  | 'photo___resize___width'
  | 'photo___resize___height'
  | 'photo___resize___aspectRatio'
  | 'photo_gallery'
  | 'photo_gallery___id'
  | 'photo_gallery___parent___id'
  | 'photo_gallery___parent___parent___id'
  | 'photo_gallery___parent___parent___children'
  | 'photo_gallery___parent___children'
  | 'photo_gallery___parent___children___id'
  | 'photo_gallery___parent___children___children'
  | 'photo_gallery___parent___internal___content'
  | 'photo_gallery___parent___internal___contentDigest'
  | 'photo_gallery___parent___internal___description'
  | 'photo_gallery___parent___internal___fieldOwners'
  | 'photo_gallery___parent___internal___ignoreType'
  | 'photo_gallery___parent___internal___mediaType'
  | 'photo_gallery___parent___internal___owner'
  | 'photo_gallery___parent___internal___type'
  | 'photo_gallery___children'
  | 'photo_gallery___children___id'
  | 'photo_gallery___children___parent___id'
  | 'photo_gallery___children___parent___children'
  | 'photo_gallery___children___children'
  | 'photo_gallery___children___children___id'
  | 'photo_gallery___children___children___children'
  | 'photo_gallery___children___internal___content'
  | 'photo_gallery___children___internal___contentDigest'
  | 'photo_gallery___children___internal___description'
  | 'photo_gallery___children___internal___fieldOwners'
  | 'photo_gallery___children___internal___ignoreType'
  | 'photo_gallery___children___internal___mediaType'
  | 'photo_gallery___children___internal___owner'
  | 'photo_gallery___children___internal___type'
  | 'photo_gallery___internal___content'
  | 'photo_gallery___internal___contentDigest'
  | 'photo_gallery___internal___description'
  | 'photo_gallery___internal___fieldOwners'
  | 'photo_gallery___internal___ignoreType'
  | 'photo_gallery___internal___mediaType'
  | 'photo_gallery___internal___owner'
  | 'photo_gallery___internal___type'
  | 'photo_gallery___slug'
  | 'photo_gallery___tags'
  | 'photo_gallery___date'
  | 'photo_gallery___location___lon'
  | 'photo_gallery___location___lat'
  | 'photo_gallery___author___id'
  | 'photo_gallery___author___parent___id'
  | 'photo_gallery___author___parent___children'
  | 'photo_gallery___author___children'
  | 'photo_gallery___author___children___id'
  | 'photo_gallery___author___children___children'
  | 'photo_gallery___author___internal___content'
  | 'photo_gallery___author___internal___contentDigest'
  | 'photo_gallery___author___internal___description'
  | 'photo_gallery___author___internal___fieldOwners'
  | 'photo_gallery___author___internal___ignoreType'
  | 'photo_gallery___author___internal___mediaType'
  | 'photo_gallery___author___internal___owner'
  | 'photo_gallery___author___internal___type'
  | 'photo_gallery___author___name'
  | 'photo_gallery___author___twitterHandle'
  | 'photo_gallery___author___profilePhoto___id'
  | 'photo_gallery___author___profilePhoto___children'
  | 'photo_gallery___author___profilePhoto___contentful_id'
  | 'photo_gallery___author___profilePhoto___title'
  | 'photo_gallery___author___profilePhoto___description'
  | 'photo_gallery___author___profilePhoto___node_locale'
  | 'photo_gallery___author___biography___id'
  | 'photo_gallery___author___biography___children'
  | 'photo_gallery___author___biography___biography'
  | 'photo_gallery___author___spaceId'
  | 'photo_gallery___author___contentful_id'
  | 'photo_gallery___author___createdAt'
  | 'photo_gallery___author___updatedAt'
  | 'photo_gallery___author___sys___revision'
  | 'photo_gallery___author___node_locale'
  | 'photo_gallery___author___photo_gallery'
  | 'photo_gallery___author___photo_gallery___id'
  | 'photo_gallery___author___photo_gallery___children'
  | 'photo_gallery___author___photo_gallery___slug'
  | 'photo_gallery___author___photo_gallery___tags'
  | 'photo_gallery___author___photo_gallery___date'
  | 'photo_gallery___author___photo_gallery___images'
  | 'photo_gallery___author___photo_gallery___spaceId'
  | 'photo_gallery___author___photo_gallery___contentful_id'
  | 'photo_gallery___author___photo_gallery___createdAt'
  | 'photo_gallery___author___photo_gallery___updatedAt'
  | 'photo_gallery___author___photo_gallery___node_locale'
  | 'photo_gallery___author___childContentfulAuthorBiographyTextNode___id'
  | 'photo_gallery___author___childContentfulAuthorBiographyTextNode___children'
  | 'photo_gallery___author___childContentfulAuthorBiographyTextNode___biography'
  | 'photo_gallery___coverImage___id'
  | 'photo_gallery___coverImage___parent___id'
  | 'photo_gallery___coverImage___parent___children'
  | 'photo_gallery___coverImage___children'
  | 'photo_gallery___coverImage___children___id'
  | 'photo_gallery___coverImage___children___children'
  | 'photo_gallery___coverImage___internal___content'
  | 'photo_gallery___coverImage___internal___contentDigest'
  | 'photo_gallery___coverImage___internal___description'
  | 'photo_gallery___coverImage___internal___fieldOwners'
  | 'photo_gallery___coverImage___internal___ignoreType'
  | 'photo_gallery___coverImage___internal___mediaType'
  | 'photo_gallery___coverImage___internal___owner'
  | 'photo_gallery___coverImage___internal___type'
  | 'photo_gallery___coverImage___contentful_id'
  | 'photo_gallery___coverImage___file___url'
  | 'photo_gallery___coverImage___file___fileName'
  | 'photo_gallery___coverImage___file___contentType'
  | 'photo_gallery___coverImage___title'
  | 'photo_gallery___coverImage___description'
  | 'photo_gallery___coverImage___node_locale'
  | 'photo_gallery___coverImage___fixed___base64'
  | 'photo_gallery___coverImage___fixed___tracedSVG'
  | 'photo_gallery___coverImage___fixed___aspectRatio'
  | 'photo_gallery___coverImage___fixed___width'
  | 'photo_gallery___coverImage___fixed___height'
  | 'photo_gallery___coverImage___fixed___src'
  | 'photo_gallery___coverImage___fixed___srcSet'
  | 'photo_gallery___coverImage___fixed___srcWebp'
  | 'photo_gallery___coverImage___fixed___srcSetWebp'
  | 'photo_gallery___coverImage___resolutions___base64'
  | 'photo_gallery___coverImage___resolutions___tracedSVG'
  | 'photo_gallery___coverImage___resolutions___aspectRatio'
  | 'photo_gallery___coverImage___resolutions___width'
  | 'photo_gallery___coverImage___resolutions___height'
  | 'photo_gallery___coverImage___resolutions___src'
  | 'photo_gallery___coverImage___resolutions___srcSet'
  | 'photo_gallery___coverImage___resolutions___srcWebp'
  | 'photo_gallery___coverImage___resolutions___srcSetWebp'
  | 'photo_gallery___coverImage___fluid___base64'
  | 'photo_gallery___coverImage___fluid___tracedSVG'
  | 'photo_gallery___coverImage___fluid___aspectRatio'
  | 'photo_gallery___coverImage___fluid___src'
  | 'photo_gallery___coverImage___fluid___srcSet'
  | 'photo_gallery___coverImage___fluid___srcWebp'
  | 'photo_gallery___coverImage___fluid___srcSetWebp'
  | 'photo_gallery___coverImage___fluid___sizes'
  | 'photo_gallery___coverImage___sizes___base64'
  | 'photo_gallery___coverImage___sizes___tracedSVG'
  | 'photo_gallery___coverImage___sizes___aspectRatio'
  | 'photo_gallery___coverImage___sizes___src'
  | 'photo_gallery___coverImage___sizes___srcSet'
  | 'photo_gallery___coverImage___sizes___srcWebp'
  | 'photo_gallery___coverImage___sizes___srcSetWebp'
  | 'photo_gallery___coverImage___sizes___sizes'
  | 'photo_gallery___coverImage___resize___base64'
  | 'photo_gallery___coverImage___resize___tracedSVG'
  | 'photo_gallery___coverImage___resize___src'
  | 'photo_gallery___coverImage___resize___width'
  | 'photo_gallery___coverImage___resize___height'
  | 'photo_gallery___coverImage___resize___aspectRatio'
  | 'photo_gallery___images'
  | 'photo_gallery___images___id'
  | 'photo_gallery___images___parent___id'
  | 'photo_gallery___images___parent___children'
  | 'photo_gallery___images___children'
  | 'photo_gallery___images___children___id'
  | 'photo_gallery___images___children___children'
  | 'photo_gallery___images___internal___content'
  | 'photo_gallery___images___internal___contentDigest'
  | 'photo_gallery___images___internal___description'
  | 'photo_gallery___images___internal___fieldOwners'
  | 'photo_gallery___images___internal___ignoreType'
  | 'photo_gallery___images___internal___mediaType'
  | 'photo_gallery___images___internal___owner'
  | 'photo_gallery___images___internal___type'
  | 'photo_gallery___images___title'
  | 'photo_gallery___images___photo___id'
  | 'photo_gallery___images___photo___children'
  | 'photo_gallery___images___photo___contentful_id'
  | 'photo_gallery___images___photo___title'
  | 'photo_gallery___images___photo___description'
  | 'photo_gallery___images___photo___node_locale'
  | 'photo_gallery___images___photo_gallery'
  | 'photo_gallery___images___photo_gallery___id'
  | 'photo_gallery___images___photo_gallery___children'
  | 'photo_gallery___images___photo_gallery___slug'
  | 'photo_gallery___images___photo_gallery___tags'
  | 'photo_gallery___images___photo_gallery___date'
  | 'photo_gallery___images___photo_gallery___images'
  | 'photo_gallery___images___photo_gallery___spaceId'
  | 'photo_gallery___images___photo_gallery___contentful_id'
  | 'photo_gallery___images___photo_gallery___createdAt'
  | 'photo_gallery___images___photo_gallery___updatedAt'
  | 'photo_gallery___images___photo_gallery___node_locale'
  | 'photo_gallery___images___imageCaption___id'
  | 'photo_gallery___images___imageCaption___children'
  | 'photo_gallery___images___imageCaption___imageCaption'
  | 'photo_gallery___images___imageCredits___id'
  | 'photo_gallery___images___imageCredits___children'
  | 'photo_gallery___images___imageCredits___imageCredits'
  | 'photo_gallery___images___spaceId'
  | 'photo_gallery___images___contentful_id'
  | 'photo_gallery___images___createdAt'
  | 'photo_gallery___images___updatedAt'
  | 'photo_gallery___images___sys___revision'
  | 'photo_gallery___images___node_locale'
  | 'photo_gallery___images___childContentfulImageImageCaptionTextNode___id'
  | 'photo_gallery___images___childContentfulImageImageCaptionTextNode___children'
  | 'photo_gallery___images___childContentfulImageImageCaptionTextNode___imageCaption'
  | 'photo_gallery___images___childContentfulImageImageCreditsTextNode___id'
  | 'photo_gallery___images___childContentfulImageImageCreditsTextNode___children'
  | 'photo_gallery___images___childContentfulImageImageCreditsTextNode___imageCredits'
  | 'photo_gallery___title___id'
  | 'photo_gallery___title___parent___id'
  | 'photo_gallery___title___parent___children'
  | 'photo_gallery___title___children'
  | 'photo_gallery___title___children___id'
  | 'photo_gallery___title___children___children'
  | 'photo_gallery___title___internal___content'
  | 'photo_gallery___title___internal___contentDigest'
  | 'photo_gallery___title___internal___description'
  | 'photo_gallery___title___internal___fieldOwners'
  | 'photo_gallery___title___internal___ignoreType'
  | 'photo_gallery___title___internal___mediaType'
  | 'photo_gallery___title___internal___owner'
  | 'photo_gallery___title___internal___type'
  | 'photo_gallery___title___title'
  | 'photo_gallery___title___childMarkdownRemark___id'
  | 'photo_gallery___title___childMarkdownRemark___excerpt'
  | 'photo_gallery___title___childMarkdownRemark___rawMarkdownBody'
  | 'photo_gallery___title___childMarkdownRemark___html'
  | 'photo_gallery___title___childMarkdownRemark___htmlAst'
  | 'photo_gallery___title___childMarkdownRemark___excerptAst'
  | 'photo_gallery___title___childMarkdownRemark___headings'
  | 'photo_gallery___title___childMarkdownRemark___timeToRead'
  | 'photo_gallery___title___childMarkdownRemark___tableOfContents'
  | 'photo_gallery___title___childMarkdownRemark___children'
  | 'photo_gallery___description___id'
  | 'photo_gallery___description___parent___id'
  | 'photo_gallery___description___parent___children'
  | 'photo_gallery___description___children'
  | 'photo_gallery___description___children___id'
  | 'photo_gallery___description___children___children'
  | 'photo_gallery___description___internal___content'
  | 'photo_gallery___description___internal___contentDigest'
  | 'photo_gallery___description___internal___description'
  | 'photo_gallery___description___internal___fieldOwners'
  | 'photo_gallery___description___internal___ignoreType'
  | 'photo_gallery___description___internal___mediaType'
  | 'photo_gallery___description___internal___owner'
  | 'photo_gallery___description___internal___type'
  | 'photo_gallery___description___description'
  | 'photo_gallery___description___childMarkdownRemark___id'
  | 'photo_gallery___description___childMarkdownRemark___excerpt'
  | 'photo_gallery___description___childMarkdownRemark___rawMarkdownBody'
  | 'photo_gallery___description___childMarkdownRemark___html'
  | 'photo_gallery___description___childMarkdownRemark___htmlAst'
  | 'photo_gallery___description___childMarkdownRemark___excerptAst'
  | 'photo_gallery___description___childMarkdownRemark___headings'
  | 'photo_gallery___description___childMarkdownRemark___timeToRead'
  | 'photo_gallery___description___childMarkdownRemark___tableOfContents'
  | 'photo_gallery___description___childMarkdownRemark___children'
  | 'photo_gallery___spaceId'
  | 'photo_gallery___contentful_id'
  | 'photo_gallery___createdAt'
  | 'photo_gallery___updatedAt'
  | 'photo_gallery___sys___revision'
  | 'photo_gallery___node_locale'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___parent___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___parent___children'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___children'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___children___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___children___children'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___content'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___contentDigest'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___description'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___fieldOwners'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___ignoreType'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___mediaType'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___owner'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___type'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___title'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___excerpt'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___html'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___htmlAst'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___excerptAst'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___headings'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___timeToRead'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___tableOfContents'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___parent___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___parent___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___content'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___contentDigest'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___description'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___fieldOwners'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___ignoreType'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___mediaType'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___owner'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___type'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___description'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___excerpt'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___html'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___htmlAst'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___excerptAst'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___headings'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___timeToRead'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___tableOfContents'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___children'
  | 'imageCaption___id'
  | 'imageCaption___parent___id'
  | 'imageCaption___parent___parent___id'
  | 'imageCaption___parent___parent___children'
  | 'imageCaption___parent___children'
  | 'imageCaption___parent___children___id'
  | 'imageCaption___parent___children___children'
  | 'imageCaption___parent___internal___content'
  | 'imageCaption___parent___internal___contentDigest'
  | 'imageCaption___parent___internal___description'
  | 'imageCaption___parent___internal___fieldOwners'
  | 'imageCaption___parent___internal___ignoreType'
  | 'imageCaption___parent___internal___mediaType'
  | 'imageCaption___parent___internal___owner'
  | 'imageCaption___parent___internal___type'
  | 'imageCaption___children'
  | 'imageCaption___children___id'
  | 'imageCaption___children___parent___id'
  | 'imageCaption___children___parent___children'
  | 'imageCaption___children___children'
  | 'imageCaption___children___children___id'
  | 'imageCaption___children___children___children'
  | 'imageCaption___children___internal___content'
  | 'imageCaption___children___internal___contentDigest'
  | 'imageCaption___children___internal___description'
  | 'imageCaption___children___internal___fieldOwners'
  | 'imageCaption___children___internal___ignoreType'
  | 'imageCaption___children___internal___mediaType'
  | 'imageCaption___children___internal___owner'
  | 'imageCaption___children___internal___type'
  | 'imageCaption___internal___content'
  | 'imageCaption___internal___contentDigest'
  | 'imageCaption___internal___description'
  | 'imageCaption___internal___fieldOwners'
  | 'imageCaption___internal___ignoreType'
  | 'imageCaption___internal___mediaType'
  | 'imageCaption___internal___owner'
  | 'imageCaption___internal___type'
  | 'imageCaption___imageCaption'
  | 'imageCaption___childMarkdownRemark___id'
  | 'imageCaption___childMarkdownRemark___frontmatter___title'
  | 'imageCaption___childMarkdownRemark___excerpt'
  | 'imageCaption___childMarkdownRemark___rawMarkdownBody'
  | 'imageCaption___childMarkdownRemark___html'
  | 'imageCaption___childMarkdownRemark___htmlAst'
  | 'imageCaption___childMarkdownRemark___excerptAst'
  | 'imageCaption___childMarkdownRemark___headings'
  | 'imageCaption___childMarkdownRemark___headings___value'
  | 'imageCaption___childMarkdownRemark___headings___depth'
  | 'imageCaption___childMarkdownRemark___timeToRead'
  | 'imageCaption___childMarkdownRemark___tableOfContents'
  | 'imageCaption___childMarkdownRemark___wordCount___paragraphs'
  | 'imageCaption___childMarkdownRemark___wordCount___sentences'
  | 'imageCaption___childMarkdownRemark___wordCount___words'
  | 'imageCaption___childMarkdownRemark___parent___id'
  | 'imageCaption___childMarkdownRemark___parent___children'
  | 'imageCaption___childMarkdownRemark___children'
  | 'imageCaption___childMarkdownRemark___children___id'
  | 'imageCaption___childMarkdownRemark___children___children'
  | 'imageCaption___childMarkdownRemark___internal___content'
  | 'imageCaption___childMarkdownRemark___internal___contentDigest'
  | 'imageCaption___childMarkdownRemark___internal___description'
  | 'imageCaption___childMarkdownRemark___internal___fieldOwners'
  | 'imageCaption___childMarkdownRemark___internal___ignoreType'
  | 'imageCaption___childMarkdownRemark___internal___mediaType'
  | 'imageCaption___childMarkdownRemark___internal___owner'
  | 'imageCaption___childMarkdownRemark___internal___type'
  | 'imageCredits___id'
  | 'imageCredits___parent___id'
  | 'imageCredits___parent___parent___id'
  | 'imageCredits___parent___parent___children'
  | 'imageCredits___parent___children'
  | 'imageCredits___parent___children___id'
  | 'imageCredits___parent___children___children'
  | 'imageCredits___parent___internal___content'
  | 'imageCredits___parent___internal___contentDigest'
  | 'imageCredits___parent___internal___description'
  | 'imageCredits___parent___internal___fieldOwners'
  | 'imageCredits___parent___internal___ignoreType'
  | 'imageCredits___parent___internal___mediaType'
  | 'imageCredits___parent___internal___owner'
  | 'imageCredits___parent___internal___type'
  | 'imageCredits___children'
  | 'imageCredits___children___id'
  | 'imageCredits___children___parent___id'
  | 'imageCredits___children___parent___children'
  | 'imageCredits___children___children'
  | 'imageCredits___children___children___id'
  | 'imageCredits___children___children___children'
  | 'imageCredits___children___internal___content'
  | 'imageCredits___children___internal___contentDigest'
  | 'imageCredits___children___internal___description'
  | 'imageCredits___children___internal___fieldOwners'
  | 'imageCredits___children___internal___ignoreType'
  | 'imageCredits___children___internal___mediaType'
  | 'imageCredits___children___internal___owner'
  | 'imageCredits___children___internal___type'
  | 'imageCredits___internal___content'
  | 'imageCredits___internal___contentDigest'
  | 'imageCredits___internal___description'
  | 'imageCredits___internal___fieldOwners'
  | 'imageCredits___internal___ignoreType'
  | 'imageCredits___internal___mediaType'
  | 'imageCredits___internal___owner'
  | 'imageCredits___internal___type'
  | 'imageCredits___imageCredits'
  | 'imageCredits___childMarkdownRemark___id'
  | 'imageCredits___childMarkdownRemark___frontmatter___title'
  | 'imageCredits___childMarkdownRemark___excerpt'
  | 'imageCredits___childMarkdownRemark___rawMarkdownBody'
  | 'imageCredits___childMarkdownRemark___html'
  | 'imageCredits___childMarkdownRemark___htmlAst'
  | 'imageCredits___childMarkdownRemark___excerptAst'
  | 'imageCredits___childMarkdownRemark___headings'
  | 'imageCredits___childMarkdownRemark___headings___value'
  | 'imageCredits___childMarkdownRemark___headings___depth'
  | 'imageCredits___childMarkdownRemark___timeToRead'
  | 'imageCredits___childMarkdownRemark___tableOfContents'
  | 'imageCredits___childMarkdownRemark___wordCount___paragraphs'
  | 'imageCredits___childMarkdownRemark___wordCount___sentences'
  | 'imageCredits___childMarkdownRemark___wordCount___words'
  | 'imageCredits___childMarkdownRemark___parent___id'
  | 'imageCredits___childMarkdownRemark___parent___children'
  | 'imageCredits___childMarkdownRemark___children'
  | 'imageCredits___childMarkdownRemark___children___id'
  | 'imageCredits___childMarkdownRemark___children___children'
  | 'imageCredits___childMarkdownRemark___internal___content'
  | 'imageCredits___childMarkdownRemark___internal___contentDigest'
  | 'imageCredits___childMarkdownRemark___internal___description'
  | 'imageCredits___childMarkdownRemark___internal___fieldOwners'
  | 'imageCredits___childMarkdownRemark___internal___ignoreType'
  | 'imageCredits___childMarkdownRemark___internal___mediaType'
  | 'imageCredits___childMarkdownRemark___internal___owner'
  | 'imageCredits___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulImageImageCaptionTextNode___id'
  | 'childContentfulImageImageCaptionTextNode___parent___id'
  | 'childContentfulImageImageCaptionTextNode___parent___parent___id'
  | 'childContentfulImageImageCaptionTextNode___parent___parent___children'
  | 'childContentfulImageImageCaptionTextNode___parent___children'
  | 'childContentfulImageImageCaptionTextNode___parent___children___id'
  | 'childContentfulImageImageCaptionTextNode___parent___children___children'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___content'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___contentDigest'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___description'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___ignoreType'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___mediaType'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___owner'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___type'
  | 'childContentfulImageImageCaptionTextNode___children'
  | 'childContentfulImageImageCaptionTextNode___children___id'
  | 'childContentfulImageImageCaptionTextNode___children___parent___id'
  | 'childContentfulImageImageCaptionTextNode___children___parent___children'
  | 'childContentfulImageImageCaptionTextNode___children___children'
  | 'childContentfulImageImageCaptionTextNode___children___children___id'
  | 'childContentfulImageImageCaptionTextNode___children___children___children'
  | 'childContentfulImageImageCaptionTextNode___children___internal___content'
  | 'childContentfulImageImageCaptionTextNode___children___internal___contentDigest'
  | 'childContentfulImageImageCaptionTextNode___children___internal___description'
  | 'childContentfulImageImageCaptionTextNode___children___internal___fieldOwners'
  | 'childContentfulImageImageCaptionTextNode___children___internal___ignoreType'
  | 'childContentfulImageImageCaptionTextNode___children___internal___mediaType'
  | 'childContentfulImageImageCaptionTextNode___children___internal___owner'
  | 'childContentfulImageImageCaptionTextNode___children___internal___type'
  | 'childContentfulImageImageCaptionTextNode___internal___content'
  | 'childContentfulImageImageCaptionTextNode___internal___contentDigest'
  | 'childContentfulImageImageCaptionTextNode___internal___description'
  | 'childContentfulImageImageCaptionTextNode___internal___fieldOwners'
  | 'childContentfulImageImageCaptionTextNode___internal___ignoreType'
  | 'childContentfulImageImageCaptionTextNode___internal___mediaType'
  | 'childContentfulImageImageCaptionTextNode___internal___owner'
  | 'childContentfulImageImageCaptionTextNode___internal___type'
  | 'childContentfulImageImageCaptionTextNode___imageCaption'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___id'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___html'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___headings'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___children'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___children___id'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___children___children'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulImageImageCaptionTextNode___childMarkdownRemark___internal___type'
  | 'childContentfulImageImageCreditsTextNode___id'
  | 'childContentfulImageImageCreditsTextNode___parent___id'
  | 'childContentfulImageImageCreditsTextNode___parent___parent___id'
  | 'childContentfulImageImageCreditsTextNode___parent___parent___children'
  | 'childContentfulImageImageCreditsTextNode___parent___children'
  | 'childContentfulImageImageCreditsTextNode___parent___children___id'
  | 'childContentfulImageImageCreditsTextNode___parent___children___children'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___content'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___contentDigest'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___description'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___fieldOwners'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___ignoreType'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___mediaType'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___owner'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___type'
  | 'childContentfulImageImageCreditsTextNode___children'
  | 'childContentfulImageImageCreditsTextNode___children___id'
  | 'childContentfulImageImageCreditsTextNode___children___parent___id'
  | 'childContentfulImageImageCreditsTextNode___children___parent___children'
  | 'childContentfulImageImageCreditsTextNode___children___children'
  | 'childContentfulImageImageCreditsTextNode___children___children___id'
  | 'childContentfulImageImageCreditsTextNode___children___children___children'
  | 'childContentfulImageImageCreditsTextNode___children___internal___content'
  | 'childContentfulImageImageCreditsTextNode___children___internal___contentDigest'
  | 'childContentfulImageImageCreditsTextNode___children___internal___description'
  | 'childContentfulImageImageCreditsTextNode___children___internal___fieldOwners'
  | 'childContentfulImageImageCreditsTextNode___children___internal___ignoreType'
  | 'childContentfulImageImageCreditsTextNode___children___internal___mediaType'
  | 'childContentfulImageImageCreditsTextNode___children___internal___owner'
  | 'childContentfulImageImageCreditsTextNode___children___internal___type'
  | 'childContentfulImageImageCreditsTextNode___internal___content'
  | 'childContentfulImageImageCreditsTextNode___internal___contentDigest'
  | 'childContentfulImageImageCreditsTextNode___internal___description'
  | 'childContentfulImageImageCreditsTextNode___internal___fieldOwners'
  | 'childContentfulImageImageCreditsTextNode___internal___ignoreType'
  | 'childContentfulImageImageCreditsTextNode___internal___mediaType'
  | 'childContentfulImageImageCreditsTextNode___internal___owner'
  | 'childContentfulImageImageCreditsTextNode___internal___type'
  | 'childContentfulImageImageCreditsTextNode___imageCredits'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___id'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___html'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___headings'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___children'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___children___id'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___children___children'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulImageImageCreditsTextNode___childMarkdownRemark___internal___type';

export type ContentfulImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<ContentfulAssetFilterInput>;
  photo_gallery?: Maybe<ContentfulPhotoGalleryFilterListInput>;
  imageCaption?: Maybe<ContentfulImageImageCaptionTextNodeFilterInput>;
  imageCredits?: Maybe<ContentfulImageImageCreditsTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulImageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulImageImageCaptionTextNode?: Maybe<ContentfulImageImageCaptionTextNodeFilterInput>;
  childContentfulImageImageCreditsTextNode?: Maybe<ContentfulImageImageCreditsTextNodeFilterInput>;
};

export type ContentfulImageFilterListInput = {
  elemMatch?: Maybe<ContentfulImageFilterInput>;
};

export type ContentfulImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageEdge>;
  nodes: Array<ContentfulImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulImageImageCaptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  imageCaption?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulImageImageCaptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageImageCaptionTextNodeEdge>;
  nodes: Array<ContentfulImageImageCaptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulImageImageCaptionTextNodeGroupConnection>;
};


export type ContentfulImageImageCaptionTextNodeConnectionDistinctArgs = {
  field: ContentfulImageImageCaptionTextNodeFieldsEnum;
};


export type ContentfulImageImageCaptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulImageImageCaptionTextNodeFieldsEnum;
};

export type ContentfulImageImageCaptionTextNodeEdge = {
  next?: Maybe<ContentfulImageImageCaptionTextNode>;
  node: ContentfulImageImageCaptionTextNode;
  previous?: Maybe<ContentfulImageImageCaptionTextNode>;
};

export type ContentfulImageImageCaptionTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'imageCaption'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulImageImageCaptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  imageCaption?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulImageImageCaptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageImageCaptionTextNodeEdge>;
  nodes: Array<ContentfulImageImageCaptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulImageImageCaptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulImageImageCaptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulImageImageCreditsTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  imageCredits?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulImageImageCreditsTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageImageCreditsTextNodeEdge>;
  nodes: Array<ContentfulImageImageCreditsTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulImageImageCreditsTextNodeGroupConnection>;
};


export type ContentfulImageImageCreditsTextNodeConnectionDistinctArgs = {
  field: ContentfulImageImageCreditsTextNodeFieldsEnum;
};


export type ContentfulImageImageCreditsTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulImageImageCreditsTextNodeFieldsEnum;
};

export type ContentfulImageImageCreditsTextNodeEdge = {
  next?: Maybe<ContentfulImageImageCreditsTextNode>;
  node: ContentfulImageImageCreditsTextNode;
  previous?: Maybe<ContentfulImageImageCreditsTextNode>;
};

export type ContentfulImageImageCreditsTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'imageCredits'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulImageImageCreditsTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  imageCredits?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulImageImageCreditsTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageImageCreditsTextNodeEdge>;
  nodes: Array<ContentfulImageImageCreditsTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulImageImageCreditsTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulImageImageCreditsTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulImageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulImageSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulImageSysContentType>;
};

export type ContentfulImageSysContentType = {
  sys?: Maybe<ContentfulImageSysContentTypeSys>;
};

export type ContentfulImageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulImageSysContentTypeSysFilterInput>;
};

export type ContentfulImageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulImageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulImageSysContentTypeFilterInput>;
};

export type ContentfulInformation = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  postExcerpt?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  contentfulid?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Array<Maybe<ContentfulAsset>>>;
  content?: Maybe<ContentfulInformationContentRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulInformationSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulInformationContentRichTextNode?: Maybe<ContentfulInformationContentRichTextNode>;
};


export type ContentfulInformationCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulInformationUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulInformationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulInformationEdge>;
  nodes: Array<ContentfulInformation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulInformationGroupConnection>;
};


export type ContentfulInformationConnectionDistinctArgs = {
  field: ContentfulInformationFieldsEnum;
};


export type ContentfulInformationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulInformationFieldsEnum;
};

export type ContentfulInformationContentRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulInformationContentRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulInformationContentRichTextNodeEdge>;
  nodes: Array<ContentfulInformationContentRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulInformationContentRichTextNodeGroupConnection>;
};


export type ContentfulInformationContentRichTextNodeConnectionDistinctArgs = {
  field: ContentfulInformationContentRichTextNodeFieldsEnum;
};


export type ContentfulInformationContentRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulInformationContentRichTextNodeFieldsEnum;
};

export type ContentfulInformationContentRichTextNodeEdge = {
  next?: Maybe<ContentfulInformationContentRichTextNode>;
  node: ContentfulInformationContentRichTextNode;
  previous?: Maybe<ContentfulInformationContentRichTextNode>;
};

export type ContentfulInformationContentRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'nodeType'
  | 'content'
  | 'json';

export type ContentfulInformationContentRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulInformationContentRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulInformationContentRichTextNodeEdge>;
  nodes: Array<ContentfulInformationContentRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulInformationContentRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulInformationContentRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulInformationEdge = {
  next?: Maybe<ContentfulInformation>;
  node: ContentfulInformation;
  previous?: Maybe<ContentfulInformation>;
};

export type ContentfulInformationFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'postExcerpt'
  | 'type'
  | 'createdAt'
  | 'updatedAt'
  | 'contentfulid'
  | 'thumbnail'
  | 'thumbnail___id'
  | 'thumbnail___parent___id'
  | 'thumbnail___parent___parent___id'
  | 'thumbnail___parent___parent___children'
  | 'thumbnail___parent___children'
  | 'thumbnail___parent___children___id'
  | 'thumbnail___parent___children___children'
  | 'thumbnail___parent___internal___content'
  | 'thumbnail___parent___internal___contentDigest'
  | 'thumbnail___parent___internal___description'
  | 'thumbnail___parent___internal___fieldOwners'
  | 'thumbnail___parent___internal___ignoreType'
  | 'thumbnail___parent___internal___mediaType'
  | 'thumbnail___parent___internal___owner'
  | 'thumbnail___parent___internal___type'
  | 'thumbnail___children'
  | 'thumbnail___children___id'
  | 'thumbnail___children___parent___id'
  | 'thumbnail___children___parent___children'
  | 'thumbnail___children___children'
  | 'thumbnail___children___children___id'
  | 'thumbnail___children___children___children'
  | 'thumbnail___children___internal___content'
  | 'thumbnail___children___internal___contentDigest'
  | 'thumbnail___children___internal___description'
  | 'thumbnail___children___internal___fieldOwners'
  | 'thumbnail___children___internal___ignoreType'
  | 'thumbnail___children___internal___mediaType'
  | 'thumbnail___children___internal___owner'
  | 'thumbnail___children___internal___type'
  | 'thumbnail___internal___content'
  | 'thumbnail___internal___contentDigest'
  | 'thumbnail___internal___description'
  | 'thumbnail___internal___fieldOwners'
  | 'thumbnail___internal___ignoreType'
  | 'thumbnail___internal___mediaType'
  | 'thumbnail___internal___owner'
  | 'thumbnail___internal___type'
  | 'thumbnail___contentful_id'
  | 'thumbnail___file___url'
  | 'thumbnail___file___details___size'
  | 'thumbnail___file___fileName'
  | 'thumbnail___file___contentType'
  | 'thumbnail___title'
  | 'thumbnail___description'
  | 'thumbnail___node_locale'
  | 'thumbnail___fixed___base64'
  | 'thumbnail___fixed___tracedSVG'
  | 'thumbnail___fixed___aspectRatio'
  | 'thumbnail___fixed___width'
  | 'thumbnail___fixed___height'
  | 'thumbnail___fixed___src'
  | 'thumbnail___fixed___srcSet'
  | 'thumbnail___fixed___srcWebp'
  | 'thumbnail___fixed___srcSetWebp'
  | 'thumbnail___resolutions___base64'
  | 'thumbnail___resolutions___tracedSVG'
  | 'thumbnail___resolutions___aspectRatio'
  | 'thumbnail___resolutions___width'
  | 'thumbnail___resolutions___height'
  | 'thumbnail___resolutions___src'
  | 'thumbnail___resolutions___srcSet'
  | 'thumbnail___resolutions___srcWebp'
  | 'thumbnail___resolutions___srcSetWebp'
  | 'thumbnail___fluid___base64'
  | 'thumbnail___fluid___tracedSVG'
  | 'thumbnail___fluid___aspectRatio'
  | 'thumbnail___fluid___src'
  | 'thumbnail___fluid___srcSet'
  | 'thumbnail___fluid___srcWebp'
  | 'thumbnail___fluid___srcSetWebp'
  | 'thumbnail___fluid___sizes'
  | 'thumbnail___sizes___base64'
  | 'thumbnail___sizes___tracedSVG'
  | 'thumbnail___sizes___aspectRatio'
  | 'thumbnail___sizes___src'
  | 'thumbnail___sizes___srcSet'
  | 'thumbnail___sizes___srcWebp'
  | 'thumbnail___sizes___srcSetWebp'
  | 'thumbnail___sizes___sizes'
  | 'thumbnail___resize___base64'
  | 'thumbnail___resize___tracedSVG'
  | 'thumbnail___resize___src'
  | 'thumbnail___resize___width'
  | 'thumbnail___resize___height'
  | 'thumbnail___resize___aspectRatio'
  | 'content___id'
  | 'content___parent___id'
  | 'content___parent___parent___id'
  | 'content___parent___parent___children'
  | 'content___parent___children'
  | 'content___parent___children___id'
  | 'content___parent___children___children'
  | 'content___parent___internal___content'
  | 'content___parent___internal___contentDigest'
  | 'content___parent___internal___description'
  | 'content___parent___internal___fieldOwners'
  | 'content___parent___internal___ignoreType'
  | 'content___parent___internal___mediaType'
  | 'content___parent___internal___owner'
  | 'content___parent___internal___type'
  | 'content___children'
  | 'content___children___id'
  | 'content___children___parent___id'
  | 'content___children___parent___children'
  | 'content___children___children'
  | 'content___children___children___id'
  | 'content___children___children___children'
  | 'content___children___internal___content'
  | 'content___children___internal___contentDigest'
  | 'content___children___internal___description'
  | 'content___children___internal___fieldOwners'
  | 'content___children___internal___ignoreType'
  | 'content___children___internal___mediaType'
  | 'content___children___internal___owner'
  | 'content___children___internal___type'
  | 'content___internal___content'
  | 'content___internal___contentDigest'
  | 'content___internal___description'
  | 'content___internal___fieldOwners'
  | 'content___internal___ignoreType'
  | 'content___internal___mediaType'
  | 'content___internal___owner'
  | 'content___internal___type'
  | 'content___nodeType'
  | 'content___content'
  | 'content___json'
  | 'spaceId'
  | 'contentful_id'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulInformationContentRichTextNode___id'
  | 'childContentfulInformationContentRichTextNode___parent___id'
  | 'childContentfulInformationContentRichTextNode___parent___parent___id'
  | 'childContentfulInformationContentRichTextNode___parent___parent___children'
  | 'childContentfulInformationContentRichTextNode___parent___children'
  | 'childContentfulInformationContentRichTextNode___parent___children___id'
  | 'childContentfulInformationContentRichTextNode___parent___children___children'
  | 'childContentfulInformationContentRichTextNode___parent___internal___content'
  | 'childContentfulInformationContentRichTextNode___parent___internal___contentDigest'
  | 'childContentfulInformationContentRichTextNode___parent___internal___description'
  | 'childContentfulInformationContentRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulInformationContentRichTextNode___parent___internal___ignoreType'
  | 'childContentfulInformationContentRichTextNode___parent___internal___mediaType'
  | 'childContentfulInformationContentRichTextNode___parent___internal___owner'
  | 'childContentfulInformationContentRichTextNode___parent___internal___type'
  | 'childContentfulInformationContentRichTextNode___children'
  | 'childContentfulInformationContentRichTextNode___children___id'
  | 'childContentfulInformationContentRichTextNode___children___parent___id'
  | 'childContentfulInformationContentRichTextNode___children___parent___children'
  | 'childContentfulInformationContentRichTextNode___children___children'
  | 'childContentfulInformationContentRichTextNode___children___children___id'
  | 'childContentfulInformationContentRichTextNode___children___children___children'
  | 'childContentfulInformationContentRichTextNode___children___internal___content'
  | 'childContentfulInformationContentRichTextNode___children___internal___contentDigest'
  | 'childContentfulInformationContentRichTextNode___children___internal___description'
  | 'childContentfulInformationContentRichTextNode___children___internal___fieldOwners'
  | 'childContentfulInformationContentRichTextNode___children___internal___ignoreType'
  | 'childContentfulInformationContentRichTextNode___children___internal___mediaType'
  | 'childContentfulInformationContentRichTextNode___children___internal___owner'
  | 'childContentfulInformationContentRichTextNode___children___internal___type'
  | 'childContentfulInformationContentRichTextNode___internal___content'
  | 'childContentfulInformationContentRichTextNode___internal___contentDigest'
  | 'childContentfulInformationContentRichTextNode___internal___description'
  | 'childContentfulInformationContentRichTextNode___internal___fieldOwners'
  | 'childContentfulInformationContentRichTextNode___internal___ignoreType'
  | 'childContentfulInformationContentRichTextNode___internal___mediaType'
  | 'childContentfulInformationContentRichTextNode___internal___owner'
  | 'childContentfulInformationContentRichTextNode___internal___type'
  | 'childContentfulInformationContentRichTextNode___nodeType'
  | 'childContentfulInformationContentRichTextNode___content'
  | 'childContentfulInformationContentRichTextNode___json';

export type ContentfulInformationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  postExcerpt?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  contentfulid?: Maybe<IntQueryOperatorInput>;
  thumbnail?: Maybe<ContentfulAssetFilterListInput>;
  content?: Maybe<ContentfulInformationContentRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulInformationSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulInformationContentRichTextNode?: Maybe<ContentfulInformationContentRichTextNodeFilterInput>;
};

export type ContentfulInformationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulInformationEdge>;
  nodes: Array<ContentfulInformation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulInformationSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulInformationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulInformationSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulInformationSysContentType>;
};

export type ContentfulInformationSysContentType = {
  sys?: Maybe<ContentfulInformationSysContentTypeSys>;
};

export type ContentfulInformationSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulInformationSysContentTypeSysFilterInput>;
};

export type ContentfulInformationSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulInformationSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulInformationSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulInformationSysContentTypeFilterInput>;
};

export type ContentfulNextDate = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  date?: Maybe<Scalars['Date']>;
  contentfulid?: Maybe<Scalars['Int']>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulNextDateSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulNextDateDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulNextDateCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulNextDateUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulNextDateConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNextDateEdge>;
  nodes: Array<ContentfulNextDate>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulNextDateGroupConnection>;
};


export type ContentfulNextDateConnectionDistinctArgs = {
  field: ContentfulNextDateFieldsEnum;
};


export type ContentfulNextDateConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulNextDateFieldsEnum;
};

export type ContentfulNextDateEdge = {
  next?: Maybe<ContentfulNextDate>;
  node: ContentfulNextDate;
  previous?: Maybe<ContentfulNextDate>;
};

export type ContentfulNextDateFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'date'
  | 'contentfulid'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulNextDateFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  contentfulid?: Maybe<IntQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNextDateSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNextDateGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNextDateEdge>;
  nodes: Array<ContentfulNextDate>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulNextDateSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulNextDateFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulNextDateSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulNextDateSysContentType>;
};

export type ContentfulNextDateSysContentType = {
  sys?: Maybe<ContentfulNextDateSysContentTypeSys>;
};

export type ContentfulNextDateSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulNextDateSysContentTypeSysFilterInput>;
};

export type ContentfulNextDateSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulNextDateSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNextDateSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulNextDateSysContentTypeFilterInput>;
};

export type ContentfulPhotoGallery = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['Date']>;
  location?: Maybe<ContentfulPhotoGalleryLocation>;
  author?: Maybe<ContentfulAuthor>;
  coverImage?: Maybe<ContentfulAsset>;
  images?: Maybe<Array<Maybe<ContentfulImage>>>;
  title?: Maybe<ContentfulPhotoGalleryTitleTextNode>;
  description?: Maybe<ContentfulPhotoGalleryDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPhotoGallerySys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulPhotoGalleryTitleTextNode?: Maybe<ContentfulPhotoGalleryTitleTextNode>;
  childContentfulPhotoGalleryDescriptionTextNode?: Maybe<ContentfulPhotoGalleryDescriptionTextNode>;
};


export type ContentfulPhotoGalleryDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPhotoGalleryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPhotoGalleryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPhotoGalleryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPhotoGalleryEdge>;
  nodes: Array<ContentfulPhotoGallery>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPhotoGalleryGroupConnection>;
};


export type ContentfulPhotoGalleryConnectionDistinctArgs = {
  field: ContentfulPhotoGalleryFieldsEnum;
};


export type ContentfulPhotoGalleryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPhotoGalleryFieldsEnum;
};

export type ContentfulPhotoGalleryDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulPhotoGalleryDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPhotoGalleryDescriptionTextNodeEdge>;
  nodes: Array<ContentfulPhotoGalleryDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPhotoGalleryDescriptionTextNodeGroupConnection>;
};


export type ContentfulPhotoGalleryDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulPhotoGalleryDescriptionTextNodeFieldsEnum;
};


export type ContentfulPhotoGalleryDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPhotoGalleryDescriptionTextNodeFieldsEnum;
};

export type ContentfulPhotoGalleryDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulPhotoGalleryDescriptionTextNode>;
  node: ContentfulPhotoGalleryDescriptionTextNode;
  previous?: Maybe<ContentfulPhotoGalleryDescriptionTextNode>;
};

export type ContentfulPhotoGalleryDescriptionTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'description'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulPhotoGalleryDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulPhotoGalleryDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPhotoGalleryDescriptionTextNodeEdge>;
  nodes: Array<ContentfulPhotoGalleryDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPhotoGalleryDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPhotoGalleryDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPhotoGalleryEdge = {
  next?: Maybe<ContentfulPhotoGallery>;
  node: ContentfulPhotoGallery;
  previous?: Maybe<ContentfulPhotoGallery>;
};

export type ContentfulPhotoGalleryFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'slug'
  | 'tags'
  | 'date'
  | 'location___lon'
  | 'location___lat'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'author___name'
  | 'author___twitterHandle'
  | 'author___profilePhoto___id'
  | 'author___profilePhoto___parent___id'
  | 'author___profilePhoto___parent___children'
  | 'author___profilePhoto___children'
  | 'author___profilePhoto___children___id'
  | 'author___profilePhoto___children___children'
  | 'author___profilePhoto___internal___content'
  | 'author___profilePhoto___internal___contentDigest'
  | 'author___profilePhoto___internal___description'
  | 'author___profilePhoto___internal___fieldOwners'
  | 'author___profilePhoto___internal___ignoreType'
  | 'author___profilePhoto___internal___mediaType'
  | 'author___profilePhoto___internal___owner'
  | 'author___profilePhoto___internal___type'
  | 'author___profilePhoto___contentful_id'
  | 'author___profilePhoto___file___url'
  | 'author___profilePhoto___file___fileName'
  | 'author___profilePhoto___file___contentType'
  | 'author___profilePhoto___title'
  | 'author___profilePhoto___description'
  | 'author___profilePhoto___node_locale'
  | 'author___profilePhoto___fixed___base64'
  | 'author___profilePhoto___fixed___tracedSVG'
  | 'author___profilePhoto___fixed___aspectRatio'
  | 'author___profilePhoto___fixed___width'
  | 'author___profilePhoto___fixed___height'
  | 'author___profilePhoto___fixed___src'
  | 'author___profilePhoto___fixed___srcSet'
  | 'author___profilePhoto___fixed___srcWebp'
  | 'author___profilePhoto___fixed___srcSetWebp'
  | 'author___profilePhoto___resolutions___base64'
  | 'author___profilePhoto___resolutions___tracedSVG'
  | 'author___profilePhoto___resolutions___aspectRatio'
  | 'author___profilePhoto___resolutions___width'
  | 'author___profilePhoto___resolutions___height'
  | 'author___profilePhoto___resolutions___src'
  | 'author___profilePhoto___resolutions___srcSet'
  | 'author___profilePhoto___resolutions___srcWebp'
  | 'author___profilePhoto___resolutions___srcSetWebp'
  | 'author___profilePhoto___fluid___base64'
  | 'author___profilePhoto___fluid___tracedSVG'
  | 'author___profilePhoto___fluid___aspectRatio'
  | 'author___profilePhoto___fluid___src'
  | 'author___profilePhoto___fluid___srcSet'
  | 'author___profilePhoto___fluid___srcWebp'
  | 'author___profilePhoto___fluid___srcSetWebp'
  | 'author___profilePhoto___fluid___sizes'
  | 'author___profilePhoto___sizes___base64'
  | 'author___profilePhoto___sizes___tracedSVG'
  | 'author___profilePhoto___sizes___aspectRatio'
  | 'author___profilePhoto___sizes___src'
  | 'author___profilePhoto___sizes___srcSet'
  | 'author___profilePhoto___sizes___srcWebp'
  | 'author___profilePhoto___sizes___srcSetWebp'
  | 'author___profilePhoto___sizes___sizes'
  | 'author___profilePhoto___resize___base64'
  | 'author___profilePhoto___resize___tracedSVG'
  | 'author___profilePhoto___resize___src'
  | 'author___profilePhoto___resize___width'
  | 'author___profilePhoto___resize___height'
  | 'author___profilePhoto___resize___aspectRatio'
  | 'author___biography___id'
  | 'author___biography___parent___id'
  | 'author___biography___parent___children'
  | 'author___biography___children'
  | 'author___biography___children___id'
  | 'author___biography___children___children'
  | 'author___biography___internal___content'
  | 'author___biography___internal___contentDigest'
  | 'author___biography___internal___description'
  | 'author___biography___internal___fieldOwners'
  | 'author___biography___internal___ignoreType'
  | 'author___biography___internal___mediaType'
  | 'author___biography___internal___owner'
  | 'author___biography___internal___type'
  | 'author___biography___biography'
  | 'author___biography___childMarkdownRemark___id'
  | 'author___biography___childMarkdownRemark___excerpt'
  | 'author___biography___childMarkdownRemark___rawMarkdownBody'
  | 'author___biography___childMarkdownRemark___html'
  | 'author___biography___childMarkdownRemark___htmlAst'
  | 'author___biography___childMarkdownRemark___excerptAst'
  | 'author___biography___childMarkdownRemark___headings'
  | 'author___biography___childMarkdownRemark___timeToRead'
  | 'author___biography___childMarkdownRemark___tableOfContents'
  | 'author___biography___childMarkdownRemark___children'
  | 'author___spaceId'
  | 'author___contentful_id'
  | 'author___createdAt'
  | 'author___updatedAt'
  | 'author___sys___revision'
  | 'author___node_locale'
  | 'author___photo_gallery'
  | 'author___photo_gallery___id'
  | 'author___photo_gallery___parent___id'
  | 'author___photo_gallery___parent___children'
  | 'author___photo_gallery___children'
  | 'author___photo_gallery___children___id'
  | 'author___photo_gallery___children___children'
  | 'author___photo_gallery___internal___content'
  | 'author___photo_gallery___internal___contentDigest'
  | 'author___photo_gallery___internal___description'
  | 'author___photo_gallery___internal___fieldOwners'
  | 'author___photo_gallery___internal___ignoreType'
  | 'author___photo_gallery___internal___mediaType'
  | 'author___photo_gallery___internal___owner'
  | 'author___photo_gallery___internal___type'
  | 'author___photo_gallery___slug'
  | 'author___photo_gallery___tags'
  | 'author___photo_gallery___date'
  | 'author___photo_gallery___location___lon'
  | 'author___photo_gallery___location___lat'
  | 'author___photo_gallery___author___id'
  | 'author___photo_gallery___author___children'
  | 'author___photo_gallery___author___name'
  | 'author___photo_gallery___author___twitterHandle'
  | 'author___photo_gallery___author___spaceId'
  | 'author___photo_gallery___author___contentful_id'
  | 'author___photo_gallery___author___createdAt'
  | 'author___photo_gallery___author___updatedAt'
  | 'author___photo_gallery___author___node_locale'
  | 'author___photo_gallery___author___photo_gallery'
  | 'author___photo_gallery___coverImage___id'
  | 'author___photo_gallery___coverImage___children'
  | 'author___photo_gallery___coverImage___contentful_id'
  | 'author___photo_gallery___coverImage___title'
  | 'author___photo_gallery___coverImage___description'
  | 'author___photo_gallery___coverImage___node_locale'
  | 'author___photo_gallery___images'
  | 'author___photo_gallery___images___id'
  | 'author___photo_gallery___images___children'
  | 'author___photo_gallery___images___title'
  | 'author___photo_gallery___images___photo_gallery'
  | 'author___photo_gallery___images___spaceId'
  | 'author___photo_gallery___images___contentful_id'
  | 'author___photo_gallery___images___createdAt'
  | 'author___photo_gallery___images___updatedAt'
  | 'author___photo_gallery___images___node_locale'
  | 'author___photo_gallery___title___id'
  | 'author___photo_gallery___title___children'
  | 'author___photo_gallery___title___title'
  | 'author___photo_gallery___description___id'
  | 'author___photo_gallery___description___children'
  | 'author___photo_gallery___description___description'
  | 'author___photo_gallery___spaceId'
  | 'author___photo_gallery___contentful_id'
  | 'author___photo_gallery___createdAt'
  | 'author___photo_gallery___updatedAt'
  | 'author___photo_gallery___sys___revision'
  | 'author___photo_gallery___node_locale'
  | 'author___photo_gallery___childContentfulPhotoGalleryTitleTextNode___id'
  | 'author___photo_gallery___childContentfulPhotoGalleryTitleTextNode___children'
  | 'author___photo_gallery___childContentfulPhotoGalleryTitleTextNode___title'
  | 'author___photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___id'
  | 'author___photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children'
  | 'author___photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___description'
  | 'author___childContentfulAuthorBiographyTextNode___id'
  | 'author___childContentfulAuthorBiographyTextNode___parent___id'
  | 'author___childContentfulAuthorBiographyTextNode___parent___children'
  | 'author___childContentfulAuthorBiographyTextNode___children'
  | 'author___childContentfulAuthorBiographyTextNode___children___id'
  | 'author___childContentfulAuthorBiographyTextNode___children___children'
  | 'author___childContentfulAuthorBiographyTextNode___internal___content'
  | 'author___childContentfulAuthorBiographyTextNode___internal___contentDigest'
  | 'author___childContentfulAuthorBiographyTextNode___internal___description'
  | 'author___childContentfulAuthorBiographyTextNode___internal___fieldOwners'
  | 'author___childContentfulAuthorBiographyTextNode___internal___ignoreType'
  | 'author___childContentfulAuthorBiographyTextNode___internal___mediaType'
  | 'author___childContentfulAuthorBiographyTextNode___internal___owner'
  | 'author___childContentfulAuthorBiographyTextNode___internal___type'
  | 'author___childContentfulAuthorBiographyTextNode___biography'
  | 'author___childContentfulAuthorBiographyTextNode___childMarkdownRemark___id'
  | 'author___childContentfulAuthorBiographyTextNode___childMarkdownRemark___excerpt'
  | 'author___childContentfulAuthorBiographyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'author___childContentfulAuthorBiographyTextNode___childMarkdownRemark___html'
  | 'author___childContentfulAuthorBiographyTextNode___childMarkdownRemark___htmlAst'
  | 'author___childContentfulAuthorBiographyTextNode___childMarkdownRemark___excerptAst'
  | 'author___childContentfulAuthorBiographyTextNode___childMarkdownRemark___headings'
  | 'author___childContentfulAuthorBiographyTextNode___childMarkdownRemark___timeToRead'
  | 'author___childContentfulAuthorBiographyTextNode___childMarkdownRemark___tableOfContents'
  | 'author___childContentfulAuthorBiographyTextNode___childMarkdownRemark___children'
  | 'coverImage___id'
  | 'coverImage___parent___id'
  | 'coverImage___parent___parent___id'
  | 'coverImage___parent___parent___children'
  | 'coverImage___parent___children'
  | 'coverImage___parent___children___id'
  | 'coverImage___parent___children___children'
  | 'coverImage___parent___internal___content'
  | 'coverImage___parent___internal___contentDigest'
  | 'coverImage___parent___internal___description'
  | 'coverImage___parent___internal___fieldOwners'
  | 'coverImage___parent___internal___ignoreType'
  | 'coverImage___parent___internal___mediaType'
  | 'coverImage___parent___internal___owner'
  | 'coverImage___parent___internal___type'
  | 'coverImage___children'
  | 'coverImage___children___id'
  | 'coverImage___children___parent___id'
  | 'coverImage___children___parent___children'
  | 'coverImage___children___children'
  | 'coverImage___children___children___id'
  | 'coverImage___children___children___children'
  | 'coverImage___children___internal___content'
  | 'coverImage___children___internal___contentDigest'
  | 'coverImage___children___internal___description'
  | 'coverImage___children___internal___fieldOwners'
  | 'coverImage___children___internal___ignoreType'
  | 'coverImage___children___internal___mediaType'
  | 'coverImage___children___internal___owner'
  | 'coverImage___children___internal___type'
  | 'coverImage___internal___content'
  | 'coverImage___internal___contentDigest'
  | 'coverImage___internal___description'
  | 'coverImage___internal___fieldOwners'
  | 'coverImage___internal___ignoreType'
  | 'coverImage___internal___mediaType'
  | 'coverImage___internal___owner'
  | 'coverImage___internal___type'
  | 'coverImage___contentful_id'
  | 'coverImage___file___url'
  | 'coverImage___file___details___size'
  | 'coverImage___file___fileName'
  | 'coverImage___file___contentType'
  | 'coverImage___title'
  | 'coverImage___description'
  | 'coverImage___node_locale'
  | 'coverImage___fixed___base64'
  | 'coverImage___fixed___tracedSVG'
  | 'coverImage___fixed___aspectRatio'
  | 'coverImage___fixed___width'
  | 'coverImage___fixed___height'
  | 'coverImage___fixed___src'
  | 'coverImage___fixed___srcSet'
  | 'coverImage___fixed___srcWebp'
  | 'coverImage___fixed___srcSetWebp'
  | 'coverImage___resolutions___base64'
  | 'coverImage___resolutions___tracedSVG'
  | 'coverImage___resolutions___aspectRatio'
  | 'coverImage___resolutions___width'
  | 'coverImage___resolutions___height'
  | 'coverImage___resolutions___src'
  | 'coverImage___resolutions___srcSet'
  | 'coverImage___resolutions___srcWebp'
  | 'coverImage___resolutions___srcSetWebp'
  | 'coverImage___fluid___base64'
  | 'coverImage___fluid___tracedSVG'
  | 'coverImage___fluid___aspectRatio'
  | 'coverImage___fluid___src'
  | 'coverImage___fluid___srcSet'
  | 'coverImage___fluid___srcWebp'
  | 'coverImage___fluid___srcSetWebp'
  | 'coverImage___fluid___sizes'
  | 'coverImage___sizes___base64'
  | 'coverImage___sizes___tracedSVG'
  | 'coverImage___sizes___aspectRatio'
  | 'coverImage___sizes___src'
  | 'coverImage___sizes___srcSet'
  | 'coverImage___sizes___srcWebp'
  | 'coverImage___sizes___srcSetWebp'
  | 'coverImage___sizes___sizes'
  | 'coverImage___resize___base64'
  | 'coverImage___resize___tracedSVG'
  | 'coverImage___resize___src'
  | 'coverImage___resize___width'
  | 'coverImage___resize___height'
  | 'coverImage___resize___aspectRatio'
  | 'images'
  | 'images___id'
  | 'images___parent___id'
  | 'images___parent___parent___id'
  | 'images___parent___parent___children'
  | 'images___parent___children'
  | 'images___parent___children___id'
  | 'images___parent___children___children'
  | 'images___parent___internal___content'
  | 'images___parent___internal___contentDigest'
  | 'images___parent___internal___description'
  | 'images___parent___internal___fieldOwners'
  | 'images___parent___internal___ignoreType'
  | 'images___parent___internal___mediaType'
  | 'images___parent___internal___owner'
  | 'images___parent___internal___type'
  | 'images___children'
  | 'images___children___id'
  | 'images___children___parent___id'
  | 'images___children___parent___children'
  | 'images___children___children'
  | 'images___children___children___id'
  | 'images___children___children___children'
  | 'images___children___internal___content'
  | 'images___children___internal___contentDigest'
  | 'images___children___internal___description'
  | 'images___children___internal___fieldOwners'
  | 'images___children___internal___ignoreType'
  | 'images___children___internal___mediaType'
  | 'images___children___internal___owner'
  | 'images___children___internal___type'
  | 'images___internal___content'
  | 'images___internal___contentDigest'
  | 'images___internal___description'
  | 'images___internal___fieldOwners'
  | 'images___internal___ignoreType'
  | 'images___internal___mediaType'
  | 'images___internal___owner'
  | 'images___internal___type'
  | 'images___title'
  | 'images___photo___id'
  | 'images___photo___parent___id'
  | 'images___photo___parent___children'
  | 'images___photo___children'
  | 'images___photo___children___id'
  | 'images___photo___children___children'
  | 'images___photo___internal___content'
  | 'images___photo___internal___contentDigest'
  | 'images___photo___internal___description'
  | 'images___photo___internal___fieldOwners'
  | 'images___photo___internal___ignoreType'
  | 'images___photo___internal___mediaType'
  | 'images___photo___internal___owner'
  | 'images___photo___internal___type'
  | 'images___photo___contentful_id'
  | 'images___photo___file___url'
  | 'images___photo___file___fileName'
  | 'images___photo___file___contentType'
  | 'images___photo___title'
  | 'images___photo___description'
  | 'images___photo___node_locale'
  | 'images___photo___fixed___base64'
  | 'images___photo___fixed___tracedSVG'
  | 'images___photo___fixed___aspectRatio'
  | 'images___photo___fixed___width'
  | 'images___photo___fixed___height'
  | 'images___photo___fixed___src'
  | 'images___photo___fixed___srcSet'
  | 'images___photo___fixed___srcWebp'
  | 'images___photo___fixed___srcSetWebp'
  | 'images___photo___resolutions___base64'
  | 'images___photo___resolutions___tracedSVG'
  | 'images___photo___resolutions___aspectRatio'
  | 'images___photo___resolutions___width'
  | 'images___photo___resolutions___height'
  | 'images___photo___resolutions___src'
  | 'images___photo___resolutions___srcSet'
  | 'images___photo___resolutions___srcWebp'
  | 'images___photo___resolutions___srcSetWebp'
  | 'images___photo___fluid___base64'
  | 'images___photo___fluid___tracedSVG'
  | 'images___photo___fluid___aspectRatio'
  | 'images___photo___fluid___src'
  | 'images___photo___fluid___srcSet'
  | 'images___photo___fluid___srcWebp'
  | 'images___photo___fluid___srcSetWebp'
  | 'images___photo___fluid___sizes'
  | 'images___photo___sizes___base64'
  | 'images___photo___sizes___tracedSVG'
  | 'images___photo___sizes___aspectRatio'
  | 'images___photo___sizes___src'
  | 'images___photo___sizes___srcSet'
  | 'images___photo___sizes___srcWebp'
  | 'images___photo___sizes___srcSetWebp'
  | 'images___photo___sizes___sizes'
  | 'images___photo___resize___base64'
  | 'images___photo___resize___tracedSVG'
  | 'images___photo___resize___src'
  | 'images___photo___resize___width'
  | 'images___photo___resize___height'
  | 'images___photo___resize___aspectRatio'
  | 'images___photo_gallery'
  | 'images___photo_gallery___id'
  | 'images___photo_gallery___parent___id'
  | 'images___photo_gallery___parent___children'
  | 'images___photo_gallery___children'
  | 'images___photo_gallery___children___id'
  | 'images___photo_gallery___children___children'
  | 'images___photo_gallery___internal___content'
  | 'images___photo_gallery___internal___contentDigest'
  | 'images___photo_gallery___internal___description'
  | 'images___photo_gallery___internal___fieldOwners'
  | 'images___photo_gallery___internal___ignoreType'
  | 'images___photo_gallery___internal___mediaType'
  | 'images___photo_gallery___internal___owner'
  | 'images___photo_gallery___internal___type'
  | 'images___photo_gallery___slug'
  | 'images___photo_gallery___tags'
  | 'images___photo_gallery___date'
  | 'images___photo_gallery___location___lon'
  | 'images___photo_gallery___location___lat'
  | 'images___photo_gallery___author___id'
  | 'images___photo_gallery___author___children'
  | 'images___photo_gallery___author___name'
  | 'images___photo_gallery___author___twitterHandle'
  | 'images___photo_gallery___author___spaceId'
  | 'images___photo_gallery___author___contentful_id'
  | 'images___photo_gallery___author___createdAt'
  | 'images___photo_gallery___author___updatedAt'
  | 'images___photo_gallery___author___node_locale'
  | 'images___photo_gallery___author___photo_gallery'
  | 'images___photo_gallery___coverImage___id'
  | 'images___photo_gallery___coverImage___children'
  | 'images___photo_gallery___coverImage___contentful_id'
  | 'images___photo_gallery___coverImage___title'
  | 'images___photo_gallery___coverImage___description'
  | 'images___photo_gallery___coverImage___node_locale'
  | 'images___photo_gallery___images'
  | 'images___photo_gallery___images___id'
  | 'images___photo_gallery___images___children'
  | 'images___photo_gallery___images___title'
  | 'images___photo_gallery___images___photo_gallery'
  | 'images___photo_gallery___images___spaceId'
  | 'images___photo_gallery___images___contentful_id'
  | 'images___photo_gallery___images___createdAt'
  | 'images___photo_gallery___images___updatedAt'
  | 'images___photo_gallery___images___node_locale'
  | 'images___photo_gallery___title___id'
  | 'images___photo_gallery___title___children'
  | 'images___photo_gallery___title___title'
  | 'images___photo_gallery___description___id'
  | 'images___photo_gallery___description___children'
  | 'images___photo_gallery___description___description'
  | 'images___photo_gallery___spaceId'
  | 'images___photo_gallery___contentful_id'
  | 'images___photo_gallery___createdAt'
  | 'images___photo_gallery___updatedAt'
  | 'images___photo_gallery___sys___revision'
  | 'images___photo_gallery___node_locale'
  | 'images___photo_gallery___childContentfulPhotoGalleryTitleTextNode___id'
  | 'images___photo_gallery___childContentfulPhotoGalleryTitleTextNode___children'
  | 'images___photo_gallery___childContentfulPhotoGalleryTitleTextNode___title'
  | 'images___photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___id'
  | 'images___photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children'
  | 'images___photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___description'
  | 'images___imageCaption___id'
  | 'images___imageCaption___parent___id'
  | 'images___imageCaption___parent___children'
  | 'images___imageCaption___children'
  | 'images___imageCaption___children___id'
  | 'images___imageCaption___children___children'
  | 'images___imageCaption___internal___content'
  | 'images___imageCaption___internal___contentDigest'
  | 'images___imageCaption___internal___description'
  | 'images___imageCaption___internal___fieldOwners'
  | 'images___imageCaption___internal___ignoreType'
  | 'images___imageCaption___internal___mediaType'
  | 'images___imageCaption___internal___owner'
  | 'images___imageCaption___internal___type'
  | 'images___imageCaption___imageCaption'
  | 'images___imageCaption___childMarkdownRemark___id'
  | 'images___imageCaption___childMarkdownRemark___excerpt'
  | 'images___imageCaption___childMarkdownRemark___rawMarkdownBody'
  | 'images___imageCaption___childMarkdownRemark___html'
  | 'images___imageCaption___childMarkdownRemark___htmlAst'
  | 'images___imageCaption___childMarkdownRemark___excerptAst'
  | 'images___imageCaption___childMarkdownRemark___headings'
  | 'images___imageCaption___childMarkdownRemark___timeToRead'
  | 'images___imageCaption___childMarkdownRemark___tableOfContents'
  | 'images___imageCaption___childMarkdownRemark___children'
  | 'images___imageCredits___id'
  | 'images___imageCredits___parent___id'
  | 'images___imageCredits___parent___children'
  | 'images___imageCredits___children'
  | 'images___imageCredits___children___id'
  | 'images___imageCredits___children___children'
  | 'images___imageCredits___internal___content'
  | 'images___imageCredits___internal___contentDigest'
  | 'images___imageCredits___internal___description'
  | 'images___imageCredits___internal___fieldOwners'
  | 'images___imageCredits___internal___ignoreType'
  | 'images___imageCredits___internal___mediaType'
  | 'images___imageCredits___internal___owner'
  | 'images___imageCredits___internal___type'
  | 'images___imageCredits___imageCredits'
  | 'images___imageCredits___childMarkdownRemark___id'
  | 'images___imageCredits___childMarkdownRemark___excerpt'
  | 'images___imageCredits___childMarkdownRemark___rawMarkdownBody'
  | 'images___imageCredits___childMarkdownRemark___html'
  | 'images___imageCredits___childMarkdownRemark___htmlAst'
  | 'images___imageCredits___childMarkdownRemark___excerptAst'
  | 'images___imageCredits___childMarkdownRemark___headings'
  | 'images___imageCredits___childMarkdownRemark___timeToRead'
  | 'images___imageCredits___childMarkdownRemark___tableOfContents'
  | 'images___imageCredits___childMarkdownRemark___children'
  | 'images___spaceId'
  | 'images___contentful_id'
  | 'images___createdAt'
  | 'images___updatedAt'
  | 'images___sys___revision'
  | 'images___node_locale'
  | 'images___childContentfulImageImageCaptionTextNode___id'
  | 'images___childContentfulImageImageCaptionTextNode___parent___id'
  | 'images___childContentfulImageImageCaptionTextNode___parent___children'
  | 'images___childContentfulImageImageCaptionTextNode___children'
  | 'images___childContentfulImageImageCaptionTextNode___children___id'
  | 'images___childContentfulImageImageCaptionTextNode___children___children'
  | 'images___childContentfulImageImageCaptionTextNode___internal___content'
  | 'images___childContentfulImageImageCaptionTextNode___internal___contentDigest'
  | 'images___childContentfulImageImageCaptionTextNode___internal___description'
  | 'images___childContentfulImageImageCaptionTextNode___internal___fieldOwners'
  | 'images___childContentfulImageImageCaptionTextNode___internal___ignoreType'
  | 'images___childContentfulImageImageCaptionTextNode___internal___mediaType'
  | 'images___childContentfulImageImageCaptionTextNode___internal___owner'
  | 'images___childContentfulImageImageCaptionTextNode___internal___type'
  | 'images___childContentfulImageImageCaptionTextNode___imageCaption'
  | 'images___childContentfulImageImageCaptionTextNode___childMarkdownRemark___id'
  | 'images___childContentfulImageImageCaptionTextNode___childMarkdownRemark___excerpt'
  | 'images___childContentfulImageImageCaptionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'images___childContentfulImageImageCaptionTextNode___childMarkdownRemark___html'
  | 'images___childContentfulImageImageCaptionTextNode___childMarkdownRemark___htmlAst'
  | 'images___childContentfulImageImageCaptionTextNode___childMarkdownRemark___excerptAst'
  | 'images___childContentfulImageImageCaptionTextNode___childMarkdownRemark___headings'
  | 'images___childContentfulImageImageCaptionTextNode___childMarkdownRemark___timeToRead'
  | 'images___childContentfulImageImageCaptionTextNode___childMarkdownRemark___tableOfContents'
  | 'images___childContentfulImageImageCaptionTextNode___childMarkdownRemark___children'
  | 'images___childContentfulImageImageCreditsTextNode___id'
  | 'images___childContentfulImageImageCreditsTextNode___parent___id'
  | 'images___childContentfulImageImageCreditsTextNode___parent___children'
  | 'images___childContentfulImageImageCreditsTextNode___children'
  | 'images___childContentfulImageImageCreditsTextNode___children___id'
  | 'images___childContentfulImageImageCreditsTextNode___children___children'
  | 'images___childContentfulImageImageCreditsTextNode___internal___content'
  | 'images___childContentfulImageImageCreditsTextNode___internal___contentDigest'
  | 'images___childContentfulImageImageCreditsTextNode___internal___description'
  | 'images___childContentfulImageImageCreditsTextNode___internal___fieldOwners'
  | 'images___childContentfulImageImageCreditsTextNode___internal___ignoreType'
  | 'images___childContentfulImageImageCreditsTextNode___internal___mediaType'
  | 'images___childContentfulImageImageCreditsTextNode___internal___owner'
  | 'images___childContentfulImageImageCreditsTextNode___internal___type'
  | 'images___childContentfulImageImageCreditsTextNode___imageCredits'
  | 'images___childContentfulImageImageCreditsTextNode___childMarkdownRemark___id'
  | 'images___childContentfulImageImageCreditsTextNode___childMarkdownRemark___excerpt'
  | 'images___childContentfulImageImageCreditsTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'images___childContentfulImageImageCreditsTextNode___childMarkdownRemark___html'
  | 'images___childContentfulImageImageCreditsTextNode___childMarkdownRemark___htmlAst'
  | 'images___childContentfulImageImageCreditsTextNode___childMarkdownRemark___excerptAst'
  | 'images___childContentfulImageImageCreditsTextNode___childMarkdownRemark___headings'
  | 'images___childContentfulImageImageCreditsTextNode___childMarkdownRemark___timeToRead'
  | 'images___childContentfulImageImageCreditsTextNode___childMarkdownRemark___tableOfContents'
  | 'images___childContentfulImageImageCreditsTextNode___childMarkdownRemark___children'
  | 'title___id'
  | 'title___parent___id'
  | 'title___parent___parent___id'
  | 'title___parent___parent___children'
  | 'title___parent___children'
  | 'title___parent___children___id'
  | 'title___parent___children___children'
  | 'title___parent___internal___content'
  | 'title___parent___internal___contentDigest'
  | 'title___parent___internal___description'
  | 'title___parent___internal___fieldOwners'
  | 'title___parent___internal___ignoreType'
  | 'title___parent___internal___mediaType'
  | 'title___parent___internal___owner'
  | 'title___parent___internal___type'
  | 'title___children'
  | 'title___children___id'
  | 'title___children___parent___id'
  | 'title___children___parent___children'
  | 'title___children___children'
  | 'title___children___children___id'
  | 'title___children___children___children'
  | 'title___children___internal___content'
  | 'title___children___internal___contentDigest'
  | 'title___children___internal___description'
  | 'title___children___internal___fieldOwners'
  | 'title___children___internal___ignoreType'
  | 'title___children___internal___mediaType'
  | 'title___children___internal___owner'
  | 'title___children___internal___type'
  | 'title___internal___content'
  | 'title___internal___contentDigest'
  | 'title___internal___description'
  | 'title___internal___fieldOwners'
  | 'title___internal___ignoreType'
  | 'title___internal___mediaType'
  | 'title___internal___owner'
  | 'title___internal___type'
  | 'title___title'
  | 'title___childMarkdownRemark___id'
  | 'title___childMarkdownRemark___frontmatter___title'
  | 'title___childMarkdownRemark___excerpt'
  | 'title___childMarkdownRemark___rawMarkdownBody'
  | 'title___childMarkdownRemark___html'
  | 'title___childMarkdownRemark___htmlAst'
  | 'title___childMarkdownRemark___excerptAst'
  | 'title___childMarkdownRemark___headings'
  | 'title___childMarkdownRemark___headings___value'
  | 'title___childMarkdownRemark___headings___depth'
  | 'title___childMarkdownRemark___timeToRead'
  | 'title___childMarkdownRemark___tableOfContents'
  | 'title___childMarkdownRemark___wordCount___paragraphs'
  | 'title___childMarkdownRemark___wordCount___sentences'
  | 'title___childMarkdownRemark___wordCount___words'
  | 'title___childMarkdownRemark___parent___id'
  | 'title___childMarkdownRemark___parent___children'
  | 'title___childMarkdownRemark___children'
  | 'title___childMarkdownRemark___children___id'
  | 'title___childMarkdownRemark___children___children'
  | 'title___childMarkdownRemark___internal___content'
  | 'title___childMarkdownRemark___internal___contentDigest'
  | 'title___childMarkdownRemark___internal___description'
  | 'title___childMarkdownRemark___internal___fieldOwners'
  | 'title___childMarkdownRemark___internal___ignoreType'
  | 'title___childMarkdownRemark___internal___mediaType'
  | 'title___childMarkdownRemark___internal___owner'
  | 'title___childMarkdownRemark___internal___type'
  | 'description___id'
  | 'description___parent___id'
  | 'description___parent___parent___id'
  | 'description___parent___parent___children'
  | 'description___parent___children'
  | 'description___parent___children___id'
  | 'description___parent___children___children'
  | 'description___parent___internal___content'
  | 'description___parent___internal___contentDigest'
  | 'description___parent___internal___description'
  | 'description___parent___internal___fieldOwners'
  | 'description___parent___internal___ignoreType'
  | 'description___parent___internal___mediaType'
  | 'description___parent___internal___owner'
  | 'description___parent___internal___type'
  | 'description___children'
  | 'description___children___id'
  | 'description___children___parent___id'
  | 'description___children___parent___children'
  | 'description___children___children'
  | 'description___children___children___id'
  | 'description___children___children___children'
  | 'description___children___internal___content'
  | 'description___children___internal___contentDigest'
  | 'description___children___internal___description'
  | 'description___children___internal___fieldOwners'
  | 'description___children___internal___ignoreType'
  | 'description___children___internal___mediaType'
  | 'description___children___internal___owner'
  | 'description___children___internal___type'
  | 'description___internal___content'
  | 'description___internal___contentDigest'
  | 'description___internal___description'
  | 'description___internal___fieldOwners'
  | 'description___internal___ignoreType'
  | 'description___internal___mediaType'
  | 'description___internal___owner'
  | 'description___internal___type'
  | 'description___description'
  | 'description___childMarkdownRemark___id'
  | 'description___childMarkdownRemark___frontmatter___title'
  | 'description___childMarkdownRemark___excerpt'
  | 'description___childMarkdownRemark___rawMarkdownBody'
  | 'description___childMarkdownRemark___html'
  | 'description___childMarkdownRemark___htmlAst'
  | 'description___childMarkdownRemark___excerptAst'
  | 'description___childMarkdownRemark___headings'
  | 'description___childMarkdownRemark___headings___value'
  | 'description___childMarkdownRemark___headings___depth'
  | 'description___childMarkdownRemark___timeToRead'
  | 'description___childMarkdownRemark___tableOfContents'
  | 'description___childMarkdownRemark___wordCount___paragraphs'
  | 'description___childMarkdownRemark___wordCount___sentences'
  | 'description___childMarkdownRemark___wordCount___words'
  | 'description___childMarkdownRemark___parent___id'
  | 'description___childMarkdownRemark___parent___children'
  | 'description___childMarkdownRemark___children'
  | 'description___childMarkdownRemark___children___id'
  | 'description___childMarkdownRemark___children___children'
  | 'description___childMarkdownRemark___internal___content'
  | 'description___childMarkdownRemark___internal___contentDigest'
  | 'description___childMarkdownRemark___internal___description'
  | 'description___childMarkdownRemark___internal___fieldOwners'
  | 'description___childMarkdownRemark___internal___ignoreType'
  | 'description___childMarkdownRemark___internal___mediaType'
  | 'description___childMarkdownRemark___internal___owner'
  | 'description___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulPhotoGalleryTitleTextNode___id'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___id'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___parent___id'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___parent___children'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___children'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___children___id'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___children___children'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___content'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___contentDigest'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___description'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___fieldOwners'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___ignoreType'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___mediaType'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___owner'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___type'
  | 'childContentfulPhotoGalleryTitleTextNode___children'
  | 'childContentfulPhotoGalleryTitleTextNode___children___id'
  | 'childContentfulPhotoGalleryTitleTextNode___children___parent___id'
  | 'childContentfulPhotoGalleryTitleTextNode___children___parent___children'
  | 'childContentfulPhotoGalleryTitleTextNode___children___children'
  | 'childContentfulPhotoGalleryTitleTextNode___children___children___id'
  | 'childContentfulPhotoGalleryTitleTextNode___children___children___children'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___content'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___contentDigest'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___description'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___fieldOwners'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___ignoreType'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___mediaType'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___owner'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___type'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___content'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___contentDigest'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___description'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___fieldOwners'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___ignoreType'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___mediaType'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___owner'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___type'
  | 'childContentfulPhotoGalleryTitleTextNode___title'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___id'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___html'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___headings'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___children'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___children___id'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___children___children'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulPhotoGalleryTitleTextNode___childMarkdownRemark___internal___type'
  | 'childContentfulPhotoGalleryDescriptionTextNode___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___parent___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___parent___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___children___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___children___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___content'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___contentDigest'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___description'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___ignoreType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___mediaType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___owner'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___type'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___parent___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___parent___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___children___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___children___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___content'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___contentDigest'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___description'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___fieldOwners'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___ignoreType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___mediaType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___owner'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___type'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___content'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___contentDigest'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___description'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___fieldOwners'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___ignoreType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___mediaType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___owner'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___type'
  | 'childContentfulPhotoGalleryDescriptionTextNode___description'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___html'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___headings'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___children___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___children___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulPhotoGalleryDescriptionTextNode___childMarkdownRemark___internal___type';

export type ContentfulPhotoGalleryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  location?: Maybe<ContentfulPhotoGalleryLocationFilterInput>;
  author?: Maybe<ContentfulAuthorFilterInput>;
  coverImage?: Maybe<ContentfulAssetFilterInput>;
  images?: Maybe<ContentfulImageFilterListInput>;
  title?: Maybe<ContentfulPhotoGalleryTitleTextNodeFilterInput>;
  description?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPhotoGallerySysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPhotoGalleryTitleTextNode?: Maybe<ContentfulPhotoGalleryTitleTextNodeFilterInput>;
  childContentfulPhotoGalleryDescriptionTextNode?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeFilterInput>;
};

export type ContentfulPhotoGalleryFilterListInput = {
  elemMatch?: Maybe<ContentfulPhotoGalleryFilterInput>;
};

export type ContentfulPhotoGalleryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPhotoGalleryEdge>;
  nodes: Array<ContentfulPhotoGallery>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPhotoGalleryLocation = {
  lon?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
};

export type ContentfulPhotoGalleryLocationFilterInput = {
  lon?: Maybe<FloatQueryOperatorInput>;
  lat?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulPhotoGallerySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPhotoGalleryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPhotoGallerySys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPhotoGallerySysContentType>;
};

export type ContentfulPhotoGallerySysContentType = {
  sys?: Maybe<ContentfulPhotoGallerySysContentTypeSys>;
};

export type ContentfulPhotoGallerySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPhotoGallerySysContentTypeSysFilterInput>;
};

export type ContentfulPhotoGallerySysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPhotoGallerySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPhotoGallerySysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPhotoGallerySysContentTypeFilterInput>;
};

export type ContentfulPhotoGalleryTitleTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulPhotoGalleryTitleTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPhotoGalleryTitleTextNodeEdge>;
  nodes: Array<ContentfulPhotoGalleryTitleTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPhotoGalleryTitleTextNodeGroupConnection>;
};


export type ContentfulPhotoGalleryTitleTextNodeConnectionDistinctArgs = {
  field: ContentfulPhotoGalleryTitleTextNodeFieldsEnum;
};


export type ContentfulPhotoGalleryTitleTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPhotoGalleryTitleTextNodeFieldsEnum;
};

export type ContentfulPhotoGalleryTitleTextNodeEdge = {
  next?: Maybe<ContentfulPhotoGalleryTitleTextNode>;
  node: ContentfulPhotoGalleryTitleTextNode;
  previous?: Maybe<ContentfulPhotoGalleryTitleTextNode>;
};

export type ContentfulPhotoGalleryTitleTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulPhotoGalleryTitleTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulPhotoGalleryTitleTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPhotoGalleryTitleTextNodeEdge>;
  nodes: Array<ContentfulPhotoGalleryTitleTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPhotoGalleryTitleTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPhotoGalleryTitleTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPosts = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  postExcerpt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  contentfulid?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Array<Maybe<ContentfulAsset>>>;
  content?: Maybe<ContentfulPostsContentRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulPostsSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulPostsContentRichTextNode?: Maybe<ContentfulPostsContentRichTextNode>;
};


export type ContentfulPostsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPostsPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPostsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPostsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostsEdge>;
  nodes: Array<ContentfulPosts>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPostsGroupConnection>;
};


export type ContentfulPostsConnectionDistinctArgs = {
  field: ContentfulPostsFieldsEnum;
};


export type ContentfulPostsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPostsFieldsEnum;
};

export type ContentfulPostsContentRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulPostsContentRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostsContentRichTextNodeEdge>;
  nodes: Array<ContentfulPostsContentRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPostsContentRichTextNodeGroupConnection>;
};


export type ContentfulPostsContentRichTextNodeConnectionDistinctArgs = {
  field: ContentfulPostsContentRichTextNodeFieldsEnum;
};


export type ContentfulPostsContentRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPostsContentRichTextNodeFieldsEnum;
};

export type ContentfulPostsContentRichTextNodeEdge = {
  next?: Maybe<ContentfulPostsContentRichTextNode>;
  node: ContentfulPostsContentRichTextNode;
  previous?: Maybe<ContentfulPostsContentRichTextNode>;
};

export type ContentfulPostsContentRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'nodeType'
  | 'content'
  | 'json';

export type ContentfulPostsContentRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulPostsContentRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostsContentRichTextNodeEdge>;
  nodes: Array<ContentfulPostsContentRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPostsContentRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostsContentRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPostsEdge = {
  next?: Maybe<ContentfulPosts>;
  node: ContentfulPosts;
  previous?: Maybe<ContentfulPosts>;
};

export type ContentfulPostsFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'postExcerpt'
  | 'createdAt'
  | 'publishedAt'
  | 'updatedAt'
  | 'contentfulid'
  | 'thumbnail'
  | 'thumbnail___id'
  | 'thumbnail___parent___id'
  | 'thumbnail___parent___parent___id'
  | 'thumbnail___parent___parent___children'
  | 'thumbnail___parent___children'
  | 'thumbnail___parent___children___id'
  | 'thumbnail___parent___children___children'
  | 'thumbnail___parent___internal___content'
  | 'thumbnail___parent___internal___contentDigest'
  | 'thumbnail___parent___internal___description'
  | 'thumbnail___parent___internal___fieldOwners'
  | 'thumbnail___parent___internal___ignoreType'
  | 'thumbnail___parent___internal___mediaType'
  | 'thumbnail___parent___internal___owner'
  | 'thumbnail___parent___internal___type'
  | 'thumbnail___children'
  | 'thumbnail___children___id'
  | 'thumbnail___children___parent___id'
  | 'thumbnail___children___parent___children'
  | 'thumbnail___children___children'
  | 'thumbnail___children___children___id'
  | 'thumbnail___children___children___children'
  | 'thumbnail___children___internal___content'
  | 'thumbnail___children___internal___contentDigest'
  | 'thumbnail___children___internal___description'
  | 'thumbnail___children___internal___fieldOwners'
  | 'thumbnail___children___internal___ignoreType'
  | 'thumbnail___children___internal___mediaType'
  | 'thumbnail___children___internal___owner'
  | 'thumbnail___children___internal___type'
  | 'thumbnail___internal___content'
  | 'thumbnail___internal___contentDigest'
  | 'thumbnail___internal___description'
  | 'thumbnail___internal___fieldOwners'
  | 'thumbnail___internal___ignoreType'
  | 'thumbnail___internal___mediaType'
  | 'thumbnail___internal___owner'
  | 'thumbnail___internal___type'
  | 'thumbnail___contentful_id'
  | 'thumbnail___file___url'
  | 'thumbnail___file___details___size'
  | 'thumbnail___file___fileName'
  | 'thumbnail___file___contentType'
  | 'thumbnail___title'
  | 'thumbnail___description'
  | 'thumbnail___node_locale'
  | 'thumbnail___fixed___base64'
  | 'thumbnail___fixed___tracedSVG'
  | 'thumbnail___fixed___aspectRatio'
  | 'thumbnail___fixed___width'
  | 'thumbnail___fixed___height'
  | 'thumbnail___fixed___src'
  | 'thumbnail___fixed___srcSet'
  | 'thumbnail___fixed___srcWebp'
  | 'thumbnail___fixed___srcSetWebp'
  | 'thumbnail___resolutions___base64'
  | 'thumbnail___resolutions___tracedSVG'
  | 'thumbnail___resolutions___aspectRatio'
  | 'thumbnail___resolutions___width'
  | 'thumbnail___resolutions___height'
  | 'thumbnail___resolutions___src'
  | 'thumbnail___resolutions___srcSet'
  | 'thumbnail___resolutions___srcWebp'
  | 'thumbnail___resolutions___srcSetWebp'
  | 'thumbnail___fluid___base64'
  | 'thumbnail___fluid___tracedSVG'
  | 'thumbnail___fluid___aspectRatio'
  | 'thumbnail___fluid___src'
  | 'thumbnail___fluid___srcSet'
  | 'thumbnail___fluid___srcWebp'
  | 'thumbnail___fluid___srcSetWebp'
  | 'thumbnail___fluid___sizes'
  | 'thumbnail___sizes___base64'
  | 'thumbnail___sizes___tracedSVG'
  | 'thumbnail___sizes___aspectRatio'
  | 'thumbnail___sizes___src'
  | 'thumbnail___sizes___srcSet'
  | 'thumbnail___sizes___srcWebp'
  | 'thumbnail___sizes___srcSetWebp'
  | 'thumbnail___sizes___sizes'
  | 'thumbnail___resize___base64'
  | 'thumbnail___resize___tracedSVG'
  | 'thumbnail___resize___src'
  | 'thumbnail___resize___width'
  | 'thumbnail___resize___height'
  | 'thumbnail___resize___aspectRatio'
  | 'content___id'
  | 'content___parent___id'
  | 'content___parent___parent___id'
  | 'content___parent___parent___children'
  | 'content___parent___children'
  | 'content___parent___children___id'
  | 'content___parent___children___children'
  | 'content___parent___internal___content'
  | 'content___parent___internal___contentDigest'
  | 'content___parent___internal___description'
  | 'content___parent___internal___fieldOwners'
  | 'content___parent___internal___ignoreType'
  | 'content___parent___internal___mediaType'
  | 'content___parent___internal___owner'
  | 'content___parent___internal___type'
  | 'content___children'
  | 'content___children___id'
  | 'content___children___parent___id'
  | 'content___children___parent___children'
  | 'content___children___children'
  | 'content___children___children___id'
  | 'content___children___children___children'
  | 'content___children___internal___content'
  | 'content___children___internal___contentDigest'
  | 'content___children___internal___description'
  | 'content___children___internal___fieldOwners'
  | 'content___children___internal___ignoreType'
  | 'content___children___internal___mediaType'
  | 'content___children___internal___owner'
  | 'content___children___internal___type'
  | 'content___internal___content'
  | 'content___internal___contentDigest'
  | 'content___internal___description'
  | 'content___internal___fieldOwners'
  | 'content___internal___ignoreType'
  | 'content___internal___mediaType'
  | 'content___internal___owner'
  | 'content___internal___type'
  | 'content___nodeType'
  | 'content___content'
  | 'content___json'
  | 'spaceId'
  | 'contentful_id'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulPostsContentRichTextNode___id'
  | 'childContentfulPostsContentRichTextNode___parent___id'
  | 'childContentfulPostsContentRichTextNode___parent___parent___id'
  | 'childContentfulPostsContentRichTextNode___parent___parent___children'
  | 'childContentfulPostsContentRichTextNode___parent___children'
  | 'childContentfulPostsContentRichTextNode___parent___children___id'
  | 'childContentfulPostsContentRichTextNode___parent___children___children'
  | 'childContentfulPostsContentRichTextNode___parent___internal___content'
  | 'childContentfulPostsContentRichTextNode___parent___internal___contentDigest'
  | 'childContentfulPostsContentRichTextNode___parent___internal___description'
  | 'childContentfulPostsContentRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulPostsContentRichTextNode___parent___internal___ignoreType'
  | 'childContentfulPostsContentRichTextNode___parent___internal___mediaType'
  | 'childContentfulPostsContentRichTextNode___parent___internal___owner'
  | 'childContentfulPostsContentRichTextNode___parent___internal___type'
  | 'childContentfulPostsContentRichTextNode___children'
  | 'childContentfulPostsContentRichTextNode___children___id'
  | 'childContentfulPostsContentRichTextNode___children___parent___id'
  | 'childContentfulPostsContentRichTextNode___children___parent___children'
  | 'childContentfulPostsContentRichTextNode___children___children'
  | 'childContentfulPostsContentRichTextNode___children___children___id'
  | 'childContentfulPostsContentRichTextNode___children___children___children'
  | 'childContentfulPostsContentRichTextNode___children___internal___content'
  | 'childContentfulPostsContentRichTextNode___children___internal___contentDigest'
  | 'childContentfulPostsContentRichTextNode___children___internal___description'
  | 'childContentfulPostsContentRichTextNode___children___internal___fieldOwners'
  | 'childContentfulPostsContentRichTextNode___children___internal___ignoreType'
  | 'childContentfulPostsContentRichTextNode___children___internal___mediaType'
  | 'childContentfulPostsContentRichTextNode___children___internal___owner'
  | 'childContentfulPostsContentRichTextNode___children___internal___type'
  | 'childContentfulPostsContentRichTextNode___internal___content'
  | 'childContentfulPostsContentRichTextNode___internal___contentDigest'
  | 'childContentfulPostsContentRichTextNode___internal___description'
  | 'childContentfulPostsContentRichTextNode___internal___fieldOwners'
  | 'childContentfulPostsContentRichTextNode___internal___ignoreType'
  | 'childContentfulPostsContentRichTextNode___internal___mediaType'
  | 'childContentfulPostsContentRichTextNode___internal___owner'
  | 'childContentfulPostsContentRichTextNode___internal___type'
  | 'childContentfulPostsContentRichTextNode___nodeType'
  | 'childContentfulPostsContentRichTextNode___content'
  | 'childContentfulPostsContentRichTextNode___json';

export type ContentfulPostsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  postExcerpt?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  contentfulid?: Maybe<IntQueryOperatorInput>;
  thumbnail?: Maybe<ContentfulAssetFilterListInput>;
  content?: Maybe<ContentfulPostsContentRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulPostsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPostsContentRichTextNode?: Maybe<ContentfulPostsContentRichTextNodeFilterInput>;
};

export type ContentfulPostsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostsEdge>;
  nodes: Array<ContentfulPosts>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPostsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPostsSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPostsSysContentType>;
};

export type ContentfulPostsSysContentType = {
  sys?: Maybe<ContentfulPostsSysContentTypeSys>;
};

export type ContentfulPostsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPostsSysContentTypeSysFilterInput>;
};

export type ContentfulPostsSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPostsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPostsSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPostsSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageResizingBehavior = 
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type InstaNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  type?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  thumbnails?: Maybe<Array<Maybe<InstaNodeThumbnails>>>;
  mediaType?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  original?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
  dimensions?: Maybe<InstaNodeDimensions>;
  localFile?: Maybe<File>;
};

export type InstaNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<InstaNodeEdge>;
  nodes: Array<InstaNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<InstaNodeGroupConnection>;
};


export type InstaNodeConnectionDistinctArgs = {
  field: InstaNodeFieldsEnum;
};


export type InstaNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: InstaNodeFieldsEnum;
};

export type InstaNodeDimensions = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type InstaNodeDimensionsFilterInput = {
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type InstaNodeEdge = {
  next?: Maybe<InstaNode>;
  node: InstaNode;
  previous?: Maybe<InstaNode>;
};

export type InstaNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'type'
  | 'username'
  | 'likes'
  | 'caption'
  | 'thumbnails'
  | 'thumbnails___src'
  | 'thumbnails___config_width'
  | 'thumbnails___config_height'
  | 'mediaType'
  | 'preview'
  | 'original'
  | 'timestamp'
  | 'dimensions___height'
  | 'dimensions___width'
  | 'localFile___sourceInstanceName'
  | 'localFile___absolutePath'
  | 'localFile___relativePath'
  | 'localFile___extension'
  | 'localFile___size'
  | 'localFile___prettySize'
  | 'localFile___modifiedTime'
  | 'localFile___accessTime'
  | 'localFile___changeTime'
  | 'localFile___birthTime'
  | 'localFile___root'
  | 'localFile___dir'
  | 'localFile___base'
  | 'localFile___ext'
  | 'localFile___name'
  | 'localFile___relativeDirectory'
  | 'localFile___dev'
  | 'localFile___mode'
  | 'localFile___nlink'
  | 'localFile___uid'
  | 'localFile___gid'
  | 'localFile___rdev'
  | 'localFile___ino'
  | 'localFile___atimeMs'
  | 'localFile___mtimeMs'
  | 'localFile___ctimeMs'
  | 'localFile___atime'
  | 'localFile___mtime'
  | 'localFile___ctime'
  | 'localFile___birthtime'
  | 'localFile___birthtimeMs'
  | 'localFile___blksize'
  | 'localFile___blocks'
  | 'localFile___url'
  | 'localFile___publicURL'
  | 'localFile___childImageSharp___fixed___base64'
  | 'localFile___childImageSharp___fixed___tracedSVG'
  | 'localFile___childImageSharp___fixed___aspectRatio'
  | 'localFile___childImageSharp___fixed___width'
  | 'localFile___childImageSharp___fixed___height'
  | 'localFile___childImageSharp___fixed___src'
  | 'localFile___childImageSharp___fixed___srcSet'
  | 'localFile___childImageSharp___fixed___srcWebp'
  | 'localFile___childImageSharp___fixed___srcSetWebp'
  | 'localFile___childImageSharp___fixed___originalName'
  | 'localFile___childImageSharp___resolutions___base64'
  | 'localFile___childImageSharp___resolutions___tracedSVG'
  | 'localFile___childImageSharp___resolutions___aspectRatio'
  | 'localFile___childImageSharp___resolutions___width'
  | 'localFile___childImageSharp___resolutions___height'
  | 'localFile___childImageSharp___resolutions___src'
  | 'localFile___childImageSharp___resolutions___srcSet'
  | 'localFile___childImageSharp___resolutions___srcWebp'
  | 'localFile___childImageSharp___resolutions___srcSetWebp'
  | 'localFile___childImageSharp___resolutions___originalName'
  | 'localFile___childImageSharp___fluid___base64'
  | 'localFile___childImageSharp___fluid___tracedSVG'
  | 'localFile___childImageSharp___fluid___aspectRatio'
  | 'localFile___childImageSharp___fluid___src'
  | 'localFile___childImageSharp___fluid___srcSet'
  | 'localFile___childImageSharp___fluid___srcWebp'
  | 'localFile___childImageSharp___fluid___srcSetWebp'
  | 'localFile___childImageSharp___fluid___sizes'
  | 'localFile___childImageSharp___fluid___originalImg'
  | 'localFile___childImageSharp___fluid___originalName'
  | 'localFile___childImageSharp___fluid___presentationWidth'
  | 'localFile___childImageSharp___fluid___presentationHeight'
  | 'localFile___childImageSharp___sizes___base64'
  | 'localFile___childImageSharp___sizes___tracedSVG'
  | 'localFile___childImageSharp___sizes___aspectRatio'
  | 'localFile___childImageSharp___sizes___src'
  | 'localFile___childImageSharp___sizes___srcSet'
  | 'localFile___childImageSharp___sizes___srcWebp'
  | 'localFile___childImageSharp___sizes___srcSetWebp'
  | 'localFile___childImageSharp___sizes___sizes'
  | 'localFile___childImageSharp___sizes___originalImg'
  | 'localFile___childImageSharp___sizes___originalName'
  | 'localFile___childImageSharp___sizes___presentationWidth'
  | 'localFile___childImageSharp___sizes___presentationHeight'
  | 'localFile___childImageSharp___original___width'
  | 'localFile___childImageSharp___original___height'
  | 'localFile___childImageSharp___original___src'
  | 'localFile___childImageSharp___resize___src'
  | 'localFile___childImageSharp___resize___tracedSVG'
  | 'localFile___childImageSharp___resize___width'
  | 'localFile___childImageSharp___resize___height'
  | 'localFile___childImageSharp___resize___aspectRatio'
  | 'localFile___childImageSharp___resize___originalName'
  | 'localFile___childImageSharp___id'
  | 'localFile___childImageSharp___parent___id'
  | 'localFile___childImageSharp___parent___children'
  | 'localFile___childImageSharp___children'
  | 'localFile___childImageSharp___children___id'
  | 'localFile___childImageSharp___children___children'
  | 'localFile___childImageSharp___internal___content'
  | 'localFile___childImageSharp___internal___contentDigest'
  | 'localFile___childImageSharp___internal___description'
  | 'localFile___childImageSharp___internal___fieldOwners'
  | 'localFile___childImageSharp___internal___ignoreType'
  | 'localFile___childImageSharp___internal___mediaType'
  | 'localFile___childImageSharp___internal___owner'
  | 'localFile___childImageSharp___internal___type'
  | 'localFile___id'
  | 'localFile___parent___id'
  | 'localFile___parent___parent___id'
  | 'localFile___parent___parent___children'
  | 'localFile___parent___children'
  | 'localFile___parent___children___id'
  | 'localFile___parent___children___children'
  | 'localFile___parent___internal___content'
  | 'localFile___parent___internal___contentDigest'
  | 'localFile___parent___internal___description'
  | 'localFile___parent___internal___fieldOwners'
  | 'localFile___parent___internal___ignoreType'
  | 'localFile___parent___internal___mediaType'
  | 'localFile___parent___internal___owner'
  | 'localFile___parent___internal___type'
  | 'localFile___children'
  | 'localFile___children___id'
  | 'localFile___children___parent___id'
  | 'localFile___children___parent___children'
  | 'localFile___children___children'
  | 'localFile___children___children___id'
  | 'localFile___children___children___children'
  | 'localFile___children___internal___content'
  | 'localFile___children___internal___contentDigest'
  | 'localFile___children___internal___description'
  | 'localFile___children___internal___fieldOwners'
  | 'localFile___children___internal___ignoreType'
  | 'localFile___children___internal___mediaType'
  | 'localFile___children___internal___owner'
  | 'localFile___children___internal___type'
  | 'localFile___internal___content'
  | 'localFile___internal___contentDigest'
  | 'localFile___internal___description'
  | 'localFile___internal___fieldOwners'
  | 'localFile___internal___ignoreType'
  | 'localFile___internal___mediaType'
  | 'localFile___internal___owner'
  | 'localFile___internal___type';

export type InstaNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  likes?: Maybe<IntQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  thumbnails?: Maybe<InstaNodeThumbnailsFilterListInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  preview?: Maybe<StringQueryOperatorInput>;
  original?: Maybe<StringQueryOperatorInput>;
  timestamp?: Maybe<IntQueryOperatorInput>;
  dimensions?: Maybe<InstaNodeDimensionsFilterInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type InstaNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<InstaNodeEdge>;
  nodes: Array<InstaNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type InstaNodeSortInput = {
  fields?: Maybe<Array<Maybe<InstaNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type InstaNodeThumbnails = {
  src?: Maybe<Scalars['String']>;
  config_width?: Maybe<Scalars['Int']>;
  config_height?: Maybe<Scalars['Int']>;
};

export type InstaNodeThumbnailsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  config_width?: Maybe<IntQueryOperatorInput>;
  config_height?: Maybe<IntQueryOperatorInput>;
};

export type InstaNodeThumbnailsFilterListInput = {
  elemMatch?: Maybe<InstaNodeThumbnailsFilterInput>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum = 
  | 'id'
  | 'frontmatter___title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  instaNode?: Maybe<InstaNode>;
  allInstaNode: InstaNodeConnection;
  cloudinaryMedia?: Maybe<CloudinaryMedia>;
  allCloudinaryMedia: CloudinaryMediaConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulNextDate?: Maybe<ContentfulNextDate>;
  allContentfulNextDate: ContentfulNextDateConnection;
  contentfulInformationContentRichTextNode?: Maybe<ContentfulInformationContentRichTextNode>;
  allContentfulInformationContentRichTextNode: ContentfulInformationContentRichTextNodeConnection;
  contentfulInformation?: Maybe<ContentfulInformation>;
  allContentfulInformation: ContentfulInformationConnection;
  contentfulPostsContentRichTextNode?: Maybe<ContentfulPostsContentRichTextNode>;
  allContentfulPostsContentRichTextNode: ContentfulPostsContentRichTextNodeConnection;
  contentfulPosts?: Maybe<ContentfulPosts>;
  allContentfulPosts: ContentfulPostsConnection;
  contentfulImageImageCreditsTextNode?: Maybe<ContentfulImageImageCreditsTextNode>;
  allContentfulImageImageCreditsTextNode: ContentfulImageImageCreditsTextNodeConnection;
  contentfulImageImageCaptionTextNode?: Maybe<ContentfulImageImageCaptionTextNode>;
  allContentfulImageImageCaptionTextNode: ContentfulImageImageCaptionTextNodeConnection;
  contentfulImage?: Maybe<ContentfulImage>;
  allContentfulImage: ContentfulImageConnection;
  contentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNode>;
  allContentfulAuthorBiographyTextNode: ContentfulAuthorBiographyTextNodeConnection;
  contentfulAuthor?: Maybe<ContentfulAuthor>;
  allContentfulAuthor: ContentfulAuthorConnection;
  contentfulPhotoGalleryDescriptionTextNode?: Maybe<ContentfulPhotoGalleryDescriptionTextNode>;
  allContentfulPhotoGalleryDescriptionTextNode: ContentfulPhotoGalleryDescriptionTextNodeConnection;
  contentfulPhotoGalleryTitleTextNode?: Maybe<ContentfulPhotoGalleryTitleTextNode>;
  allContentfulPhotoGalleryTitleTextNode: ContentfulPhotoGalleryTitleTextNodeConnection;
  contentfulPhotoGallery?: Maybe<ContentfulPhotoGallery>;
  allContentfulPhotoGallery: ContentfulPhotoGalleryConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryInstaNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  likes?: Maybe<IntQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  thumbnails?: Maybe<InstaNodeThumbnailsFilterListInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  preview?: Maybe<StringQueryOperatorInput>;
  original?: Maybe<StringQueryOperatorInput>;
  timestamp?: Maybe<IntQueryOperatorInput>;
  dimensions?: Maybe<InstaNodeDimensionsFilterInput>;
  localFile?: Maybe<FileFilterInput>;
};


export type QueryAllInstaNodeArgs = {
  filter?: Maybe<InstaNodeFilterInput>;
  sort?: Maybe<InstaNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryCloudinaryMediaArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  asset_id?: Maybe<StringQueryOperatorInput>;
  public_id?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<IntQueryOperatorInput>;
  resource_type?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  bytes?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  secure_url?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllCloudinaryMediaArgs = {
  filter?: Maybe<CloudinaryMediaFilterInput>;
  sort?: Maybe<CloudinaryMediaSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulNextDateArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  contentfulid?: Maybe<IntQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNextDateSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulNextDateArgs = {
  filter?: Maybe<ContentfulNextDateFilterInput>;
  sort?: Maybe<ContentfulNextDateSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulInformationContentRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulInformationContentRichTextNodeArgs = {
  filter?: Maybe<ContentfulInformationContentRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulInformationContentRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulInformationArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  postExcerpt?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  contentfulid?: Maybe<IntQueryOperatorInput>;
  thumbnail?: Maybe<ContentfulAssetFilterListInput>;
  content?: Maybe<ContentfulInformationContentRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulInformationSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulInformationContentRichTextNode?: Maybe<ContentfulInformationContentRichTextNodeFilterInput>;
};


export type QueryAllContentfulInformationArgs = {
  filter?: Maybe<ContentfulInformationFilterInput>;
  sort?: Maybe<ContentfulInformationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPostsContentRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulPostsContentRichTextNodeArgs = {
  filter?: Maybe<ContentfulPostsContentRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulPostsContentRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPostsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  postExcerpt?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  contentfulid?: Maybe<IntQueryOperatorInput>;
  thumbnail?: Maybe<ContentfulAssetFilterListInput>;
  content?: Maybe<ContentfulPostsContentRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulPostsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPostsContentRichTextNode?: Maybe<ContentfulPostsContentRichTextNodeFilterInput>;
};


export type QueryAllContentfulPostsArgs = {
  filter?: Maybe<ContentfulPostsFilterInput>;
  sort?: Maybe<ContentfulPostsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulImageImageCreditsTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  imageCredits?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulImageImageCreditsTextNodeArgs = {
  filter?: Maybe<ContentfulImageImageCreditsTextNodeFilterInput>;
  sort?: Maybe<ContentfulImageImageCreditsTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulImageImageCaptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  imageCaption?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulImageImageCaptionTextNodeArgs = {
  filter?: Maybe<ContentfulImageImageCaptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulImageImageCaptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulImageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  photo?: Maybe<ContentfulAssetFilterInput>;
  photo_gallery?: Maybe<ContentfulPhotoGalleryFilterListInput>;
  imageCaption?: Maybe<ContentfulImageImageCaptionTextNodeFilterInput>;
  imageCredits?: Maybe<ContentfulImageImageCreditsTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulImageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulImageImageCaptionTextNode?: Maybe<ContentfulImageImageCaptionTextNodeFilterInput>;
  childContentfulImageImageCreditsTextNode?: Maybe<ContentfulImageImageCreditsTextNodeFilterInput>;
};


export type QueryAllContentfulImageArgs = {
  filter?: Maybe<ContentfulImageFilterInput>;
  sort?: Maybe<ContentfulImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAuthorBiographyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  biography?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulAuthorBiographyTextNodeArgs = {
  filter?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
  sort?: Maybe<ContentfulAuthorBiographyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAuthorArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  twitterHandle?: Maybe<StringQueryOperatorInput>;
  profilePhoto?: Maybe<ContentfulAssetFilterInput>;
  biography?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  photo_gallery?: Maybe<ContentfulPhotoGalleryFilterListInput>;
  childContentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
};


export type QueryAllContentfulAuthorArgs = {
  filter?: Maybe<ContentfulAuthorFilterInput>;
  sort?: Maybe<ContentfulAuthorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPhotoGalleryDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulPhotoGalleryDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPhotoGalleryTitleTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulPhotoGalleryTitleTextNodeArgs = {
  filter?: Maybe<ContentfulPhotoGalleryTitleTextNodeFilterInput>;
  sort?: Maybe<ContentfulPhotoGalleryTitleTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPhotoGalleryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  location?: Maybe<ContentfulPhotoGalleryLocationFilterInput>;
  author?: Maybe<ContentfulAuthorFilterInput>;
  coverImage?: Maybe<ContentfulAssetFilterInput>;
  images?: Maybe<ContentfulImageFilterListInput>;
  title?: Maybe<ContentfulPhotoGalleryTitleTextNodeFilterInput>;
  description?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPhotoGallerySysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPhotoGalleryTitleTextNode?: Maybe<ContentfulPhotoGalleryTitleTextNodeFilterInput>;
  childContentfulPhotoGalleryDescriptionTextNode?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeFilterInput>;
};


export type QueryAllContentfulPhotoGalleryArgs = {
  filter?: Maybe<ContentfulPhotoGalleryFilterInput>;
  sort?: Maybe<ContentfulPhotoGallerySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'port'
  | 'host'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  tite?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  humanPageNumber?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  numberOfPages?: Maybe<Scalars['Int']>;
  previousPagePath?: Maybe<Scalars['String']>;
  nextPagePath?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  tite?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  pageNumber?: Maybe<IntQueryOperatorInput>;
  humanPageNumber?: Maybe<IntQueryOperatorInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  limit?: Maybe<IntQueryOperatorInput>;
  numberOfPages?: Maybe<IntQueryOperatorInput>;
  previousPagePath?: Maybe<StringQueryOperatorInput>;
  nextPagePath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'isCreatedByStatefulCreatePages'
  | 'context___tite'
  | 'context___id'
  | 'context___pageNumber'
  | 'context___humanPageNumber'
  | 'context___skip'
  | 'context___limit'
  | 'context___numberOfPages'
  | 'context___previousPagePath'
  | 'context___nextPagePath'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___cloudName'
  | 'pluginCreator___pluginOptions___apiKey'
  | 'pluginCreator___pluginOptions___apiSecret'
  | 'pluginCreator___pluginOptions___resourceType'
  | 'pluginCreator___pluginOptions___prefix'
  | 'pluginCreator___pluginOptions___username'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___fileName'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___cloudName'
  | 'pluginOptions___apiKey'
  | 'pluginOptions___apiSecret'
  | 'pluginOptions___resourceType'
  | 'pluginOptions___prefix'
  | 'pluginOptions___username'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  cloudName?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  apiSecret?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  cloudName?: Maybe<StringQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  apiSecret?: Maybe<StringQueryOperatorInput>;
  resourceType?: Maybe<StringQueryOperatorInput>;
  prefix?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> }, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = { LogoImage?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixedFragment> }> }> };

export type Unnamed_3_QueryVariables = {};


export type Unnamed_3_Query = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> } };

export type Unnamed_4_QueryVariables = {};


export type Unnamed_4_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_5_QueryVariables = {};


export type Unnamed_5_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

export type Unnamed_6_QueryVariables = {};


export type Unnamed_6_Query = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> }, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_7_QueryVariables = {};


export type Unnamed_7_Query = { LogoImage?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixedFragment> }> }> };

export type Unnamed_8_QueryVariables = {};


export type Unnamed_8_Query = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> } };

export type Unnamed_9_QueryVariables = {};


export type Unnamed_9_Query = { allContentfulNextDate: { edges: Array<{ node: Pick<ContentfulNextDate, 'date'> }> }, allContentfulPosts: { edges: Array<{ node: Pick<ContentfulPosts, 'title' | 'id'> }> } };

export type Unnamed_10_QueryVariables = {
  id?: Maybe<Scalars['String']>;
};


export type Unnamed_10_Query = { allContentfulPosts: { edges: Array<{ node: (
        Pick<ContentfulPosts, 'id' | 'title' | 'postExcerpt' | 'createdAt'>
        & { thumbnail?: Maybe<Array<Maybe<{ file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }>>>, childContentfulPostsContentRichTextNode?: Maybe<Pick<ContentfulPostsContentRichTextNode, 'json'>> }
      ) }> } };

export type Unnamed_11_QueryVariables = {};


export type Unnamed_11_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

export type Unnamed_12_QueryVariables = {};


export type Unnamed_12_Query = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> }, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_13_QueryVariables = {};


export type Unnamed_13_Query = { LogoImage?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixedFragment> }> }> };

export type Unnamed_14_QueryVariables = {};


export type Unnamed_14_Query = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> } };

export type Unnamed_15_QueryVariables = {};


export type Unnamed_15_Query = { allContentfulNextDate: { edges: Array<{ node: Pick<ContentfulNextDate, 'date'> }> }, allContentfulInformation: { edges: Array<{ node: (
        Pick<ContentfulInformation, 'postExcerpt' | 'createdAt' | 'id'>
        & { thumbnail?: Maybe<Array<Maybe<{ file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }>>>, childContentfulInformationContentRichTextNode?: Maybe<Pick<ContentfulInformationContentRichTextNode, 'json'>> }
      ) }> } };

export type Unnamed_16_QueryVariables = {
  id?: Maybe<Scalars['String']>;
};


export type Unnamed_16_Query = { allContentfulInformation: { edges: Array<{ node: (
        Pick<ContentfulInformation, 'type' | 'postExcerpt' | 'createdAt' | 'id'>
        & { thumbnail?: Maybe<Array<Maybe<{ file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }>>>, childContentfulInformationContentRichTextNode?: Maybe<Pick<ContentfulInformationContentRichTextNode, 'json'>> }
      ) }> } };

export type Unnamed_17_QueryVariables = {};


export type Unnamed_17_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

export type Unnamed_18_QueryVariables = {};


export type Unnamed_18_Query = { LogoImage?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixedFragment> }> }>, allContentfulInformation: { edges: Array<{ node: Pick<ContentfulInformation, 'id' | 'createdAt' | 'postExcerpt' | 'type'> }> } };

export type Unnamed_19_QueryVariables = {};


export type Unnamed_19_Query = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> }, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_20_QueryVariables = {};


export type Unnamed_20_Query = { LogoImage?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixedFragment> }> }> };

export type Unnamed_21_QueryVariables = {};


export type Unnamed_21_Query = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> } };

export type Unnamed_22_QueryVariables = {};


export type Unnamed_22_Query = { allContentfulInformation: { edges: Array<{ node: Pick<ContentfulInformation, 'id' | 'createdAt' | 'postExcerpt' | 'type'> }> }, allContentfulNextDate: { edges: Array<{ node: Pick<ContentfulNextDate, 'date'> }> } };

export type Unnamed_23_QueryVariables = {};


export type Unnamed_23_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_24_QueryVariables = {};


export type Unnamed_24_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

export type Unnamed_25_QueryVariables = {};


export type Unnamed_25_Query = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> }, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_26_QueryVariables = {};


export type Unnamed_26_Query = { LogoImage?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixedFragment> }> }> };

export type Unnamed_27_QueryVariables = {};


export type Unnamed_27_Query = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> } };

export type Unnamed_28_QueryVariables = {};


export type Unnamed_28_Query = { allContentfulPosts: { edges: Array<{ node: (
        Pick<ContentfulPosts, 'id' | 'title' | 'postExcerpt' | 'createdAt'>
        & { thumbnail?: Maybe<Array<Maybe<{ file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }>>> }
      ) }> }, allContentfulNextDate: { edges: Array<{ node: Pick<ContentfulNextDate, 'date'> }> } };

export type IndexPostsTitleQueryVariables = {};


export type IndexPostsTitleQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type IndexPostsLayoutQueryQueryVariables = {};


export type IndexPostsLayoutQueryQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

export type IndexSiteAndCloudinaryImagesQueryVariables = {};


export type IndexSiteAndCloudinaryImagesQuery = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> }, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_29_QueryVariables = {};


export type Unnamed_29_Query = { LogoImage?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixedFragment> }> }> };

export type Unnamed_30_QueryVariables = {};


export type Unnamed_30_Query = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> } };

export type Unnamed_31_QueryVariables = {};


export type Unnamed_31_Query = { cloudinaryMedia?: Maybe<Pick<CloudinaryMedia, 'secure_url'>> };

export type IndexProfileTitleQueryVariables = {};


export type IndexProfileTitleQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type IndexDivLayoutQueryQueryVariables = {};


export type IndexDivLayoutQueryQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

export type Unnamed_32_QueryVariables = {};


export type Unnamed_32_Query = { allInstaNode: { edges: Array<{ node: (
        Pick<InstaNode, 'id' | 'likes' | 'mediaType' | 'preview' | 'original' | 'timestamp' | 'caption'>
        & { thumbnails?: Maybe<Array<Maybe<Pick<InstaNodeThumbnails, 'src' | 'config_width' | 'config_height'>>>>, dimensions?: Maybe<Pick<InstaNodeDimensions, 'height' | 'width'>> }
      ) }> } };

export type Unnamed_33_QueryVariables = {};


export type Unnamed_33_Query = { placeholderImage01?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }>, placeholderImage02?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixedFragment> }> }> };

export type Unnamed_34_QueryVariables = {};


export type Unnamed_34_Query = { allContentfulPosts: { edges: Array<{ node: (
        Pick<ContentfulPosts, 'id' | 'title' | 'postExcerpt' | 'createdAt'>
        & { thumbnail?: Maybe<Array<Maybe<{ fixed?: Maybe<Pick<ContentfulFixed, 'src'>> }>>> }
      ) }> } };

export type Unnamed_35_QueryVariables = {};


export type Unnamed_35_Query = { LogoImage?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixedFragment> }> }>, allContentfulInformation: { edges: Array<{ node: Pick<ContentfulInformation, 'id' | 'createdAt' | 'postExcerpt' | 'type'> }> } };

export type Unnamed_36_QueryVariables = {};


export type Unnamed_36_Query = { allInstaNode: { edges: Array<{ node: (
        Pick<InstaNode, 'id' | 'likes' | 'mediaType' | 'preview' | 'original' | 'timestamp' | 'caption'>
        & { thumbnails?: Maybe<Array<Maybe<Pick<InstaNodeThumbnails, 'src' | 'config_width' | 'config_height'>>>>, dimensions?: Maybe<Pick<InstaNodeDimensions, 'height' | 'width'>> }
      ) }> } };

export type IndexDivQueryAndCloudinaryImagesQueryVariables = {};


export type IndexDivQueryAndCloudinaryImagesQuery = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> }, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_37_QueryVariables = {};


export type Unnamed_37_Query = { LogoImage?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixedFragment> }> }> };

export type Unnamed_38_QueryVariables = {};


export type Unnamed_38_Query = { allCloudinaryMedia: { edges: Array<{ node: Pick<CloudinaryMedia, 'secure_url'> }> } };

export type Unnamed_39_QueryVariables = {};


export type Unnamed_39_Query = { allContentfulPosts: { edges: Array<{ node: (
        Pick<ContentfulPosts, 'id' | 'title'>
        & { thumbnail?: Maybe<Array<Maybe<{ fixed?: Maybe<Pick<ContentfulFixed, 'src'>> }>>> }
      ) }> } };

export type Unnamed_40_QueryVariables = {};


export type Unnamed_40_Query = { allContentfulInformation: { edges: Array<{ node: Pick<ContentfulInformation, 'id' | 'createdAt' | 'postExcerpt' | 'type'> }> } };

export type IndexDivQueryQueryVariables = {};


export type IndexDivQueryQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_41_QueryVariables = {};


export type Unnamed_41_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
