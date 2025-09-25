import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  Settings, 
  ChevronDown, 
  ChevronUp, 
  Maximize, 
  RotateCcw,
  HelpCircle 
} from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";

const avatars = [
  { id: 1, src: avatar1, name: "Sarah" },
  { id: 2, src: avatar2, name: "Michael" },
  { id: 3, src: avatar3, name: "David" },
  { id: 4, src: avatar4, name: "Emma" },
  { id: 5, src: avatar5, name: "James" },
  { id: 6, src: avatar6, name: "Sophia" }
];

const AIAgentInterface = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(2);
  const [temperature, setTemperature] = useState([0.8]);
  const [genAIOpen, setGenAIOpen] = useState(true);
  const [avatarOpen, setAvatarOpen] = useState(true);
  const [proactiveEngagement, setProactiveEngagement] = useState(true);
  const [contentLogging, setContentLogging] = useState(false);
  const [customLexicon, setCustomLexicon] = useState(false);

  const messages = [
    {
      id: 1,
      content: "Hi there! My name is Ava, your English teacher today. What's your name, my dear?",
      isBot: true,
      timestamp: new Date()
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-ai-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">Connected resource</div>
            <Select defaultValue="ai-info2025ai936939333307">
              <SelectTrigger className="w-64 bg-ai-secondary border-ai-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ai-info2025ai936939333307">ai-info2025ai936939333307</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help
            </Button>
            <Button variant="ghost" size="sm">
              <Maximize className="h-4 w-4 mr-2" />
              Full Screen
            </Button>
          </div>
        </div>

        {/* Chat Session ID */}
        <div className="p-4 border-b border-ai-border">
          <div className="bg-ai-secondary rounded-lg p-3">
            <div className="text-sm text-muted-foreground text-center">
              Chat session ID: sess_ClhKqWxQ6S2yC4KAi3tj3
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-ai-primary flex items-center justify-center text-white text-sm font-medium">
                A
              </div>
              <div className="flex-1">
                <div className="bg-ai-message-bg p-4 rounded-lg">
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-ai-border">
          <div className="bg-ai-secondary rounded-lg p-4 flex items-center justify-center">
            <Button 
              size="lg" 
              className={`${isRecording ? 'bg-destructive hover:bg-destructive/90' : 'bg-ai-primary hover:bg-ai-primary-hover'} px-8`}
              onClick={() => setIsRecording(!isRecording)}
            >
              {isRecording ? (
                <>
                  <MicOff className="h-5 w-5 mr-2" />
                  Stop
                </>
              ) : (
                <>
                  <Mic className="h-5 w-5 mr-2" />
                  Start
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Configuration Sidebar */}
      <div className="w-96 bg-ai-config-bg border-l border-ai-border overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Configuration</h2>
            <Settings className="h-5 w-5" />
          </div>

          <div className="space-y-6">
            {/* GenAI Section */}
            <Collapsible open={genAIOpen} onOpenChange={setGenAIOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <h3 className="font-medium">GenAI</h3>
                {genAIOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4 mt-4">
                <div>
                  <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                    Generative AI model
                    <HelpCircle className="h-3 w-3 text-muted-foreground" />
                  </label>
                  <Select defaultValue="gpt-4o-realtime">
                    <SelectTrigger className="bg-ai-secondary border-ai-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt-4o-realtime">GPT-4o Realtime</SelectItem>
                      <SelectItem value="gpt-4">GPT-4</SelectItem>
                      <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                    Response instruction
                    <HelpCircle className="h-3 w-3 text-muted-foreground" />
                  </label>
                  <Textarea 
                    className="bg-ai-secondary border-ai-border min-h-[120px] resize-none"
                    defaultValue="## Objective
Act as &quot;Ava,&quot; an English teacher giving simple and engaging foundational English lessons. Keep responses brief, under three sentences, for maximum impact."
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                    Response temperature
                    <HelpCircle className="h-3 w-3 text-muted-foreground" />
                  </label>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={temperature}
                      onValueChange={setTemperature}
                      max={1}
                      min={0}
                      step={0.1}
                      className="flex-1"
                    />
                    <Badge variant="secondary" className="min-w-[40px] justify-center">
                      {temperature[0]}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium flex items-center gap-2">
                    Proactive engagement
                    <HelpCircle className="h-3 w-3 text-muted-foreground" />
                  </label>
                  <Switch 
                    checked={proactiveEngagement}
                    onCheckedChange={setProactiveEngagement}
                  />
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Speech input</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Speech output</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Avatar</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Separator />

            {/* Custom Lexicon */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium flex items-center gap-2">
                Custom lexicon
                <HelpCircle className="h-3 w-3 text-muted-foreground" />
              </label>
              <Switch 
                checked={customLexicon}
                onCheckedChange={setCustomLexicon}
              />
            </div>

            {customLexicon && (
              <Input 
                placeholder="Enter URL of the lexicon file"
                className="bg-ai-secondary border-ai-border"
              />
            )}

            <Separator />

            {/* Avatar Section */}
            <Collapsible open={avatarOpen} onOpenChange={setAvatarOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <h3 className="font-medium">Avatar</h3>
                {avatarOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Avatar</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Create custom avatar</span>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {avatars.map((avatar) => (
                    <button
                      key={avatar.id}
                      onClick={() => setSelectedAvatar(avatar.id)}
                      className={`relative rounded-lg overflow-hidden transition-all ${
                        selectedAvatar === avatar.id
                          ? 'ring-2 ring-ai-primary ring-offset-2 ring-offset-background'
                          : 'hover:ring-1 hover:ring-ai-border'
                      }`}
                    >
                      <img
                        src={avatar.src}
                        alt={avatar.name}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset to default
                  </Button>
                  <Button size="sm" className="bg-ai-primary hover:bg-ai-primary-hover">
                    Apply
                  </Button>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Separator />

            {/* Content Logging */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium flex items-center gap-2">
                Content logging
                <HelpCircle className="h-3 w-3 text-muted-foreground" />
              </label>
              <Switch 
                checked={contentLogging}
                onCheckedChange={setContentLogging}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentInterface;