import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FeaturedResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Research</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full bg-white overflow-hidden">
                <Image
                  src="/turnbull-dugarte_far_right_women.png?height=200&width=400"
                  alt="Far-right women do not win more votes: descriptive evidence from Britain"
                  fill
                  className="object-contain scale-150"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Far-right women do not win more votes: descriptive evidence from Britain</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 Can women candidates help far-right parties overcome their persistent gender gap? Using Reform UK candidates in the 2024 UK general election and British Election Study data, the study examines whether women candidates performed better electorally and whether they narrowed the gender gap in Reform support. The results provide little evidence for either expectation.
                </p>
                <Link href="https://doi.org/10.1332/25151088Y2026D000000157" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div> 

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/hobolt_brexit.jpg?height=200&width=400"
                  alt="Britain's Enduring Brexit Tribes"
                  fill
                  className="object-contain scale-150"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Britain's Enduring Brexit Tribes</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 How has Brexit continued to shape British political identities? The article examines how Brexit created distinct identities around Leave and Remain and how these identities continue to shape how people understand politics today.
                </p>
                <Link href="https://doi.org/10.1177/20419058261491217" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/jennings_etal_placebased_policies.png?height=200&width=400"
                  alt="How Place-Based Policy Could Counter Populist Discontent"
                  fill
                  className="object-cover object-[50%_15%] scale-75"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">How Place-Based Policy Could Counter Populist Discontent</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 Can place-based policy help counter populist discontent? Drawing on a 2025 survey in England, the study finds widespread place-based grievance alongside local pride and demand for state intervention, but little faith in central government’s ability to deliver. It argues for more place-sensitive multilevel governance and a gradual move towards devolved government.
                </p>
                <Link href="https://doi.org/10.1111%2F1467-923x.70114" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div> 


            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/anderson_pro_autonomy_paradox.png?height=200&width=400"
                  alt="The Autonomy Paradox Research"
                  fill
                  className="object-cover object-[100%_20%] scale-75"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Autonomy Paradox: Artificial Intelligence and the Foundations of Political Behavior</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 How does AI affect citizens’ political judgment and action? The paper introduces the “autonomy paradox”: AI can reduce barriers to participation while weakening independent political judgment, or support reflective preference formation while constraining citizens’ ability to act on those preferences. It develops a framework for identifying when AI supports autonomous citizenship and when it substitutes for citizens’ judgment or agency.
                </p>
                <Link href="https://www.cambridge.org/core/journals/perspectives-on-politics/article/autonomy-paradox-artificial-intelligence-and-the-foundations-of-political-behavior/29B69824C5D7D355588308D2F8FF702C" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div> 


            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/turnbull-dugarte_instrumentally_inclusive.png?height=200&width=400"
                  alt="Still Instrumentally Inclusive"
                  fill
                  className="object-contain scale-150"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Still Instrumentally Inclusive</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 Does opposition from Muslim out-groups increase support for LGBT+ inclusion? Revisiting their Spanish study across alternative weighting schemes, variance estimators, subgroup definitions, and covariate adjustments, the authors find strong support for their original results: the treatment increases support for LGBT+ inclusion, without consistent variation by immigration attitudes.
                </p>
                <Link href="https://doi.org/10.1017/S0003055426101828" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div> 


            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/reifler_educational_strikes.jpg?height=200&width=400"
                  alt="Whose side are you on? Ideology and support for educational strikes in England"
                  fill
                  className="object-cover object-[50%_99%] scale-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Whose side are you on? Ideology and support for educational strikes in England</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 What shapes public support for strikes by teachers and university lecturers? Using seven waves of YouGov data from England, the authors find that political orientation is the strongest and most consistent predictor of support, outweighing demographic factors —including whether respondents have children at home.
                </p>
                <Link href="https://doi.org/10.1177/0143831x261464376" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div> 
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/sturgis_robinson_socbot.png?height=200&width=400"
                  alt="SOCbot Research"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">SOCbot: Using Large Language Models to Dynamically Measure and Classify Occupations in Surveys</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 Can LLMs improve the measurement and classification of occupations in surveys? The paper introduces SOCbot, which codes occupations in real time and asks follow-up questions when more information is needed. It achieves coder reliability comparable to trained human coders and is feasible for large-scale survey use.
                </p>
                <Link href="https://journals.sagepub.com/doi/10.1177/00491241261461516" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div> 


            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/lawall_polarisation_feel.png?height=200&width=400"
                  alt="How does affective polarization feel? A comparative description"
                  fill
                  className="object-cover object-[80%_0%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">How does affective polarization feel? A comparative description</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 How does affective polarization actually feel? Using data from five European countries, the study finds that it is most consistently associated with positive emotions toward in-party voters and, to a lesser extent, aversion, hate, and disgust toward opponents. Overall, affective polarization appears to feel more positive than prevailing notions of “fear and loathing” suggest.
                </p>
                <Link href="https://doi.org/10.1017/s1475676526101170" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div> 


            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/rodriguez_legitimising_prejudice.png?height=200&width=400"
                  alt="Legitimising Prejudice Research"
                  fill
                  className="object-cover object-[50%_95%] scale-90"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Legitimising prejudice? The impact of radical right party presence on anti-immigration attitude expression</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 Does the parliamentary entry of radical right parties affect the expression of anti-immigration attitudes? Using the entry of Vox into the Andalusian Parliament in 2018 and a difference-in-differences design, the study finds an immediate increase in expressed negative attitudes towards immigration in Andalusia relative to the rest of Spain. However, the effect does not persist in the long term.
                </p>
                <Link href="https://doi.org/10.1016/j.electstud.2026.103081" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div> 

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/turnbull-dugarte_rrp_minority_candidates.png?height=200&width=400"
                  alt="Does far-right legislative entry affect minority candidate diversity?"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Does far-right legislative entry affect minority candidate diversity?</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 Does far-right entry into local politics affect minority candidate diversity? Using a regression discontinuity design in Swedish municipalities, the study finds that far-right entry reduces the share of immigrant candidates in mainstream parties, but responses differ by ideology: left-wing parties increase immigrant recruitment, while right-wing parties reduce it, resulting in a net increase in immigrant representation on ballots.
                </p>
                <Link href="https://doi.org/10.1017/psrm.2026.10101" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/sturgis_nonresponse.png?height=200&width=400"
                  alt="Survey Experience and Nonresponse in an Online Probability Panel"
                  fill
                  className="object-cover object-[50%_45%] scale-75"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Survey Experience and Nonresponse in an Online Probability Panel: A Survival Analysis</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 What aspects of survey experience affect continued participation in online probability panels? Using survival models, the study finds that longer and less enjoyable surveys, phone interviews, and longer gaps between invitations predict nonresponse, while personality also strongly shapes response propensity across survey invitations.
                </p>
                <Link href="https://doi.org/10.1093/poq/nfag047" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div> 


            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/lawall_electoral_loss.png?height=200&width=400"
                  alt="Angry Losers Research"
                  fill
                  className="object-cover object-[50%_50%] scale-95"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Angry losers? The (null) effects of feeling electoral loss on anti-democratic attitudes</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 Does feeling electoral loss increase support for anti-democratic attitudes? Two pre-registered survey experiments following the 2022 and 2024 US elections find no evidence that priming partisans’ negative feelings about losing affects support for political violence or democratic norms.
                </p>
                <Link href="https://doi.org/10.1017/s1475676525100601" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div> 


            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/sorace_eu_responsiveness.png?height=200&width=400"
                  alt="Dimension-specific party and public opinion responsiveness in the EU immigration acquis"
                  fill
                  className="object-cover object-[50%_50%] scale-95"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dimension-specific party and public opinion responsiveness in the EU immigration acquis</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 How do party positions and public opinion shape voting on EU immigration policy? Analysing EU immigration policies from 1990–2018 and voting behaviour for over 350 parties, the study finds that parties follow their programmatic positions more closely on immigration, but respond more to short-term shifts in public opinion on the EU integration dimension.
                </p>
                <Link href="https://doi.org/10.1080/01402382.2025.2605929" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>   

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/reifler_info_climate.png?height=200&width=400"
                  alt="Perceptions about Public Support for Climate Action"
                  fill
                  className="object-cover object-[50%_95%] scale-95"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Information on public opinion has lasting effects on second-order climate beliefs, but minimal and ephemeral effects on first-order beliefs</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 Can correcting misperceptions about public support for climate action strengthen climate beliefs and behaviours? A preregistered survey experiment in Germany finds lasting improvements in perceptions of public opinion, particularly among those who initially underestimated support. However, effects on policy feasibility perceptions, attitudes, and behavioural intentions are small, short-lived, and largely non-significant.
                </p>
                <Link href="https://doi.org/10.1016/j.jenvp.2026.102901" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>           

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/hobolt_tolerance.png?height=200&width=400"
                  alt="Partisan (In)Tolerance and Affective Polarization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Partisan (In)Tolerance and Affective Polarization</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                 How does affective polarization relate to tolerance of political opponents’ civil liberties? Using two pre-registered experiments in Britain, the study finds high levels of partisan intolerance and a strong association between partisan intolerance and affective polarization, but not with abstract measures of political tolerance.
                </p>
                <Link href="https://doi.org/10.1017/s0007123426101550" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/ranked-choice-conjoint.jpg?height=200&width=400"
                  alt="Ranked-Choice Conjoint Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ranked-Choice Conjoint Experiments</h3>
                <p className="text-gray-500 mb-4">2026</p>
                <p className="text-gray-700 mb-4">
                  How can forced-choice conjoint experiments be made more efficient and better resemble real-world political choices? Thomas S. Robinson, Mats Ahrenshop, and Spyros Kosmidis formalize the inclusion of rankings in conjoint designs and demonstrate that they offer efficiency gains among other advantages. This research makes significant theoretical contributions and has considerable implications for practitioners looking to improve precision while under sample size and time-related constraints.
                </p>
                <Link href="https://arxiv.org/abs/2604.15064" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/tappin_ai_persuasion.png?height=200&width=400"
                  alt="Political Persuasion with Conversational AI"
                  fill
                  className="object-cover object-[50%_30%] scale-95"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Levers of Political Persuasion with Conversational Artificial Intelligence</h3>
                <p className="text-gray-500 mb-4">2025</p>
                <p className="text-gray-700 mb-4">
                  What makes conversational AI politically persuasive? Across 707 British political issues, the study finds that LLMs are most persuasive after posttraining, particularly when prompted to use facts and evidence. However, information-dense responses also produce the most inaccurate claims, highlighting a trade-off between persuasiveness and accuracy.
                </p>
                <Link href="https://doi.org/10.1126/science.aea3884" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/campaigns.jpg?height=200&width=400"
                  alt="Campaigns Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">How Experiments Help Campaigns Persuade Voters</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  Do experiments help campaigns to change voters minds? Ben Tappin and various co-authors use an unique archive of over 600 real campaign experiments. They reveal that campaigns can indeed persuade voters. The effects are small but meaningful. This groundbreaking study provides the first large-scale evidence of how political persuasion works in practice.
                </p>
                <Link href="https://www.cambridge.org/core/journals/american-political-science-review/article/how-experiments-help-campaigns-persuade-voters-evidence-from-a-large-archive-of-campaigns-own-experiments/FF5BE6ED1553475F8321F7C4209357F7" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/elect.jpg?height=200&width=400"
                  alt="Infrastructure Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">When Infrastructure Wins Elections</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  Can bringing electricity to rural communities boost a government's electoral chances? What are the conditions under which this happens? Victor Araújo and co-authors analyse Brazil's massive rural electrification program and show that voters do reward incumbents for tangible improvements to their daily lives. This research demonstrates how infrastructure investments can reshape electoral landscapes in developing democracies.
                </p>
                <Link href="https://www.journals.uchicago.edu/doi/10.1086/726958" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>


            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/elite.png?height=200&width=400"
                  alt="Elite Cues Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Elite Cues and Noncomplaince</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  What happens when political elites openly defy rules and norms? Zach Dickson and Sara Hobolt use difference-in-differences analysis on Tweets to show that when leaders signal non-compliance with democratic institutions, ordinary citizens become more likely to break rules themselves. This research reveals a dangerous pathway through which democratic erosion can accelerate in polarized environments.
                </p>
                <Link href="https://www.cambridge.org/core/journals/american-political-science-review/article/elite-cues-and-noncompliance/8A5F20C549D02AADB490223B2E3F2B7E" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/zambia.jpg?height=200&width=400"
                  alt="Political Participation Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Drivers of Political Participation</h3>
                <p className="text-gray-500 mb-4">2023</p>
                <p className="text-gray-700 mb-4">
                  Why do some citizens actively participate in politics while others remain disengaged? Matthias Kroenke and co-authors conduct a comprehensive study including survey experiment of Zambian voters revealing that partisanship shapes the most important role while ethnicity and social incentives all play lesser roles in driving political participation. These findings challenge conventional wisdom about political engagement and develpoment throughtout the region.
                </p>
                <Link href="https://journals.sagepub.com/doi/full/10.1177/00104140231194064" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/ai.png?height=200&width=400"
                  alt="AI Persuasion Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Limits of AI Political Persuasion</h3>
                <p className="text-gray-500 mb-4">2025</p>
                <p className="text-gray-700 mb-4">
                  As AI language models become more sophisticated, concerns grow about their potential to manipulate political opinions. Ben Tappin and co-authors in cutting-edge experiments reveal that larger AI models can be more persuasive, the returns diminish quickly towards zero. This research provides crucial evidence for understanding AI's role in future political campaigns.
                </p>
                <Link href="https://pubmed.ncbi.nlm.nih.gov/40053360/" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/parent.jpg?height=200&width=400"
                  alt="Gender Politics Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Balancing politics and parenthood</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  Should politicians take parental leave? Jessica Smith reveals the complex public attitudes toward MPs who prioritize family responsibilities. Voters are found to not penalize politicians who seem to put parenting before politics. This effect is stronger for women than men. 
                </p>
                <Link href="https://doi.org/10.1111/1475-6765.12728" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/eu.jpg?height=200&width=400"
                  alt="Europeanisation Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Europeanisation of policy preferences: cross-national similarity and convergence 2014–2024</h3>
                <p className="text-gray-500 mb-4">2025</p>
                <p className="text-gray-700 mb-4">
                  How has European integration shaped policy preferences across member states? This comprehensive study by Miriam Sorace examines cross-national similarity and convergence in policy preferences from 2014 to 2024, revealing important patterns in how European integration influences domestic political attitudes and policy priorities across different countries.
                </p>
                <Link href="https://www.tandfonline.com/doi/full/10.1080/13501763.2025.2512901" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/corruption.jpg?height=200&width=400"
                  alt="Transnational Corruption Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Do voters differentially punish transnational corruption?</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  Under which circumstances do voters electorally punish corrupt politicians? Vanessa Cheng-Matsuno and co-author examine the case of transnational corruption through a survey experiment in the UK. They find evidence suggesting that voters differentially punish transnational corruption but only when it involves countries perceived negatively by the public. This innovative study challenges the status quo neglecting the transnational dimension in electoral accountability.
                </p>
                <Link href="https://ejpr.onlinelibrary.wiley.com/doi/10.1111/1475-6765.12643" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/echo-chambers.jpg?height=200&width=400"
                  alt="Partisan Echo Chambers Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Polarizing Effect of Partisan Echo Chambers</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  What shapes polarization? Sara Hobolt, Katharina Lawall and co-authors examine how the political homogeneity of people's social environment shapes polarization using an innovative large scale lab-in-the-field experiment in the UK. They find that partisan echo chambers increase both policy and affective polarization compared to mixed discussion groups. Their study has important implications for how to understand the drivers of polarization.
                </p>
                <Link href="https://www.cambridge.org/core/journals/american-political-science-review/article/polarizing-effect-of-partisan-echo-chambers/5044B63A13A458A97CA747E9DCA07228" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/education.jpg?height=200&width=400"
                  alt="Education as Identity Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Education as Identity? A Meta-Analysis of Education-Based Preferences</h3>
                <p className="text-gray-500 mb-4">2024</p>
                <p className="text-gray-700 mb-4">
                  Do voters across the democratic world systematically prefer better-educated legislators? Stuart Turnbull-Dugarte and co-authors conducted a meta-analysis of candidate-choice experiments from democracies across the world to identify the presence and size of the education premium in politics. This comprehensive analysis contributes to explaining the over-representation of highly educated politicians in representative institutions.
                </p>
                <Link href="https://doi.org/10.1086/730745" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/voting_stu.png?height=200&width=400"
                  alt="Heroes & Villains Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Heroes & Villains: Motivated Projection of Political Identities</h3>
                <p className="text-gray-500 mb-4">2025</p>
                <p className="text-gray-700 mb-4">
                  Do we citizens assume that virtuous heroes vote for the same party as we do and that cruel villains vote for the parties we dislike? Stuart Turnbull-Dugarte and co-authors fielded an experiment in the US and Britain to show people *assume* the partisanship of others in response to information about the moral compass of others. This research highlights the ease with which misperceptions and stereotypes about our political opponents can spread easily and fuel political polarization.
                </p>
                <Link href="https://doi.org/10.1017/psrm.2025.10" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/dating.jpg?height=200&width=400"
                  alt="Far Right Normalization Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Far Right Normalization & Centrifugal Affect: Evidence from the Dating Market</h3>
                <p className="text-gray-500 mb-4">2025</p>
                <p className="text-gray-700 mb-4">
                  Are radical right supporters penalised in apolitical social settings? Stuart Turnbull-Dugarte and co-authors conducted a dating market experiment to show that, rather than being stigmatised, radical right party supporters are socially accommodated. In fact, centre-right supporters would rather date a radical right supporter than a centre-left supporter. This cutting edge experimental research contributes to explaining how radical right parties have become normalised in liberal democracies.
                </p>
                <Link href="https://doi.org/10.1086/736698" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/working_class.jpg?height=200&width=400"
                  alt="Social Class and Political Success Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Success Denied: Social Class and Perceptions of Political Success</h3>
                <p className="text-gray-500 mb-4">2025</p>
                <p className="text-gray-700 mb-4">
                  Why are working class people under-represented in legislatures? We propose one potential mechanism: working-class individuals are perceived as less likely to achieve political success, and are subsequently 'pragmatically' discriminated against. We provide an experiment in the UK to test it.
                </p>
                <Link href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/lsq.70024" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                  Read the full study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
