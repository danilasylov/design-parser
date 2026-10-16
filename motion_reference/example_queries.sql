-- Candidate tools are proposals, not ready or tested implementations.
-- 1. All text patterns.
SELECT id,name_ru,name_en FROM patterns WHERE family_id='typography';

-- 2. Proposed Remotion candidates.
SELECT p.id,p.name_ru,c.status
FROM patterns p JOIN candidate_resources c ON c.pattern_id=p.id
WHERE c.resource_id='remotion';

-- 3. Patterns suitable for both web and video at the conceptual level.
SELECT p.id,p.name_ru FROM patterns p
JOIN pattern_tags w ON w.pattern_id=p.id AND w.kind='target_tags' AND w.tag='web'
JOIN pattern_tags v ON v.pattern_id=p.id AND v.kind='target_tags' AND v.tag='video';

-- 4. Source and license information for a resource.
SELECT r.name,r.license_label,r.license_note_ru,s.url
FROM resources r
JOIN resource_sources rs ON rs.resource_id=r.id
JOIN sources s ON s.id=rs.source_id
WHERE r.id='react-bits';

-- 5. Only implementations verified by a render test.
-- Initially returns zero rows: the seed contains descriptions, not code.
SELECT id,pattern_id,code_path FROM implementations
WHERE status IN ('render_tested','production_verified');
