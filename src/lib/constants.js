/**
 * fetchPolicy determines where the client may return a result from. The options are:
 * - cache-first (default): return result from cache. Only fetch from network if cached result is not available.
 * - cache-and-network: return result from cache first (if it exists), then return network result once it's available.
 * - cache-only: return result from cache if available, fail otherwise.
 * - no-cache: return result from network, fail if network call doesn't succeed, don't save to cache
 * - network-only: return result from network, fail if network call doesn't succeed, save to cache
 * - standby: only for queries that aren't actively watched, but should be available for refetch and updateQueries.
 */
export const FETCH_POLICY = {
  CACHE_FIRST: 'cache-first',
  CACHE_AND_NETWORK: 'cache-and-network',
  CACHE_ONLY: 'cache-only',
  // Saves the response to the cache for later use, bypassing the reading and forcing a network request.
  NETWORK_ONLY: 'network-only',
  // Does not read, nor does it write to the cache with the response.
  NO_CACHE: 'no-cache'
};

export const MEDIA_FLAGS = {
  PARTICIPANT_CONNECTED: 'participantConnected',
  PARTICIPANT_DISCONNECTED: 'participantDisconnected',
  TRACK_SUBSCRIBED: 'trackSubscribed',
  TRACK_UNSUBSCRIBED: 'trackUnsubscribed',
  DISCONNECTED: 'disconnected',
  VIDEO: 'video',
  AUDIO: 'audio',
  LOCAL_VIDEO: 'showLocalVideo',
  LOCAL_AUDIO: 'showLocalAudio',
  LOCAL_MEDIA: 'local-media',
  REMOTE_MEDIA: 'remote-media',
  PREVIEW_MEDIA: 'preview-media'
};
