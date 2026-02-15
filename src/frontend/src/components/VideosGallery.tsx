import { useState } from 'react';
import { videos } from '../content/videos';
import { energyTypes } from '../content/energyTypes';
import { Play, AlertCircle } from 'lucide-react';

export default function VideosGallery() {
  const [failedVideos, setFailedVideos] = useState<Set<string>>(new Set());

  const handleVideoError = (videoKey: string) => {
    setFailedVideos(prev => new Set(prev).add(videoKey));
  };

  if (videos.length === 0) {
    return (
      <div className="bg-accent/30 rounded-xl p-12 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
            <Play className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">لم يتم تكوين أي فيديوهات بعد</h3>
          <p className="text-muted-foreground mb-4">
            لإضافة فيديوهات تعليمية إلى هذا القسم، قم بتحرير ملف التكوين:
          </p>
          <code className="block bg-card px-4 py-2 rounded-lg text-sm text-primary font-mono mb-4" dir="ltr">
            frontend/src/content/videos.ts
          </code>
          <p className="text-sm text-muted-foreground">
            يمكنك إضافة روابط تضمين YouTube/Vimeo أو روابط فيديو MP4 مباشرة. راجع الملف للحصول على أمثلة وتعليمات.
          </p>
        </div>
      </div>
    );
  }

  const isEmbedUrl = (url: string) => {
    return url.includes('youtube.com/embed') || 
           url.includes('player.vimeo.com') || 
           url.includes('youtu.be');
  };

  // Group videos by energy type
  const videosByEnergyType = videos.reduce((acc, video, index) => {
    const typeId = video.energyTypeId || 'uncategorized';
    if (!acc[typeId]) {
      acc[typeId] = [];
    }
    acc[typeId].push({ video, originalIndex: index });
    return acc;
  }, {} as Record<string, Array<{ video: typeof videos[0]; originalIndex: number }>>);

  // Get energy type name by ID
  const getEnergyTypeName = (typeId: string) => {
    if (typeId === 'uncategorized') return 'غير مصنّف';
    const energyType = energyTypes.find(et => et.id === typeId);
    return energyType?.name || typeId;
  };

  // Sort energy types: first by defined energy types order, then uncategorized
  const sortedTypeIds = Object.keys(videosByEnergyType).sort((a, b) => {
    if (a === 'uncategorized') return 1;
    if (b === 'uncategorized') return -1;
    const indexA = energyTypes.findIndex(et => et.id === a);
    const indexB = energyTypes.findIndex(et => et.id === b);
    return indexA - indexB;
  });

  return (
    <div className="space-y-12">
      {sortedTypeIds.map(typeId => (
        <div key={typeId} className="space-y-6">
          {/* Energy Type Header */}
          <div className="flex items-center gap-3 pb-3 border-b-2 border-primary/20">
            <div className="w-2 h-8 bg-primary rounded-full" />
            <h3 className="text-2xl font-bold text-foreground">
              {getEnergyTypeName(typeId)}
            </h3>
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videosByEnergyType[typeId].map(({ video, originalIndex }) => {
              const videoKey = `${typeId}-${originalIndex}`;
              return (
                <div key={videoKey} className="bg-accent/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  {video.title && (
                    <div className="p-4 bg-card/50">
                      <h4 className="font-semibold text-foreground text-right">{video.title}</h4>
                    </div>
                  )}
                  <div className="aspect-video bg-muted relative">
                    {failedVideos.has(videoKey) ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <AlertCircle className="w-12 h-12 text-destructive mb-3" />
                        <p className="text-sm text-muted-foreground">
                          تعذر تحميل الفيديو. تحقق من أن الملف موجود في المسار الصحيح.
                        </p>
                      </div>
                    ) : isEmbedUrl(video.url) ? (
                      <iframe
                        src={video.url}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video.title || `فيديو ${getEnergyTypeName(typeId)}`}
                        onError={() => handleVideoError(videoKey)}
                      />
                    ) : (
                      <video 
                        controls 
                        className="w-full h-full"
                        preload="metadata"
                        onError={() => handleVideoError(videoKey)}
                      >
                        <source src={video.url} type="video/mp4" />
                        متصفحك لا يدعم عنصر الفيديو.
                      </video>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
